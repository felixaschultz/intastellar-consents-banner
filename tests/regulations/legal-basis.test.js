'use strict';
const vm = require('vm');
const { extractFunction } = require('./helpers/extract-fn');
const { SRC } = require('./helpers/gdpr-context');

const FN_NAMES = [
    'intaLegalBasisObjections',
    'intaLegalBasisServices',
    'intaLegalBasisObjectable',
    'intaLegalBasisAllowedRegexp',
    'intaLegalBasisAllows',
    'intaExemptLegalBasisServices',
    'intaSetLegalBasisObjection',
];

/** The blocking RegExp under test always blocks every HubSpot host, like the real allScripts. */
function createContext(services, cookie = '') {
    const ctx = {
        INTA: { settings: { legalBasis: { services } } },
        document: { cookie },
        location: { protocol: 'https:' },
        RegExp,
    };
    ctx.window = ctx;
    vm.createContext(ctx);
    vm.runInContext(
        'var INTA_LEGAL_BASIS_OBJECTIONS_COOKIE = "inta_li_objections"; var intaLegalBasisAllowed;\n'
        + FN_NAMES.map((name) => extractFunction(SRC, name)).join('\n\n')
        + '\nfunction intaBuildNotRequiredRegexp() { window.notRequired = intaExemptLegalBasisServices(/hubspot|hsforms|hs-scripts/i); }'
        + '\nintaBuildNotRequiredRegexp();',
        ctx
    );
    return ctx;
}

const forms = { id: 'hubspot-forms', name: 'HubSpot Forms', purpose: 'functional', basis: 'legitimate_interest', match: ['hsforms\\.net'] };

describe('legal basis services', () => {
    test('a legitimate interest service is not blocked before consent', () => {
        const ctx = createContext([forms]);
        expect(ctx.notRequired.test('https://js.hsforms.net/forms/v2.js')).toBe(false);
        expect(ctx.notRequired.test('https://js.hs-scripts.com/123.js')).toBe(true);
        expect(ctx.intaLegalBasisAllows('https://js.hsforms.net/forms/v2.js')).toBe(true);
    });

    test('a service that accesses the device stays blocked whatever its basis', () => {
        const ctx = createContext([{ ...forms, deviceAccess: true }]);
        expect(ctx.notRequired.test('https://js.hsforms.net/forms/v2.js')).toBe(true);
    });

    test('a service on consent stays blocked', () => {
        const ctx = createContext([{ ...forms, basis: 'consent' }]);
        expect(ctx.notRequired.test('https://js.hsforms.net/forms/v2.js')).toBe(true);
    });

    test('an objection from an earlier visit blocks the service', () => {
        const ctx = createContext([forms], 'inta_li_objections=hubspot-forms');
        expect(ctx.notRequired.test('https://js.hsforms.net/forms/v2.js')).toBe(true);
    });

    test('a contract service ignores an objection', () => {
        const ctx = createContext([{ ...forms, basis: 'contract' }], 'inta_li_objections=hubspot-forms');
        expect(ctx.notRequired.test('https://js.hsforms.net/forms/v2.js')).toBe(false);
    });

    test('objecting writes the cookie and blocks from then on', () => {
        const ctx = createContext([forms]);
        ctx.intaSetLegalBasisObjection('hubspot-forms', true);
        expect(ctx.document.cookie).toMatch(/^inta_li_objections=hubspot-forms;.*Secure/);
        ctx.document.cookie = 'inta_li_objections=hubspot-forms';
        ctx.intaBuildNotRequiredRegexp();
        expect(ctx.notRequired.test('https://js.hsforms.net/forms/v2.js')).toBe(true);
    });

    test('an invalid pattern is skipped instead of breaking blocking', () => {
        const ctx = createContext([{ ...forms, match: ['(', 'hsforms\\.net'] }]);
        expect(ctx.notRequired.test('https://js.hsforms.net/forms/v2.js')).toBe(false);
        expect(ctx.notRequired.test('https://js.hs-scripts.com/123.js')).toBe(true);
    });

    test('no services leaves the blocking RegExp untouched', () => {
        const ctx = createContext(undefined);
        expect(Object.prototype.hasOwnProperty.call(ctx.notRequired, 'test')).toBe(false);
    });
});
