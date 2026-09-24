(function () {
    var categories = {
    saveSettings: "Irrifjuta Kollox",
    necessary: {
        title: "Meħtieġa",
        description: "It-teknoloġiji tal-web u l-cookies meħtieġa huma essenzjali biex il-websajt tagħna tkun aċċessibbli u funzjonali għalik. Dawn jippermettu funzjonijiet ewlenin, bħan-navigazzjoni, wiri korrett fil-browser tiegħek, u l-ġestjoni tal-preferenzi tal-kunsens tiegħek. Mingħajr dawn it-teknoloġiji u l-cookies, il-websajt tagħna ma tistax taħdem sew."
    },
    functional: {
        title: "Funzjonali",
        description: "Il-cookies funzjonali jippermettulna naħżnu informazzjoni li tibdel kif tidher jew taħdem il-websajt, bħal-lingwa jew ir-reġjun ippreferut tiegħek."
    },
    statisic: {
        title: "Analitika",
        description: "Aħna nfittxu li ntejbu b'mod kontinwu l-esperjenza tal-utent u l-prestazzjoni tal-websajt tagħna. Biex nagħmlu dan, nużaw teknoloġiji analitiċi (inklużi cookies) li kejlu u jevalwaw b'mod anonimu liema funzjonijiet u kontenut tal-websajt tagħna jintużaw, kif, u kemm-il darba. Din id-data tgħinna ntejbu s-sit tagħna għall-utenti."
    },
    marketing: {
        title: "Marketing",
        description: "Nużaw teknoloġiji tal-web (inklużi cookies) minn sħab affidabbli biex nagħtu kontenut u riklami mfassla apposta għalik fuq websajts u pjattaformi tal-midja soċjali. Dan il-kontenut jintgħażel u jintwera abbażi tal-imġieba tal-browsing tiegħek. Il-cookies tar-riklamar u tal-marketing jintużaw biex juru riklami u kampanji rilevanti, jissorveljaw viżitaturi minn sit għal ieħor, u jiġbru informazzjoni biex jippreżentaw riklami personalizzati."
    }
};
    var arrangeWord = (window.INTA && window.INTA.settings && window.INTA.settings.arrange == "ltr") ? "xellug" : "lemin";
    window.__intaCmpLocalePayload = {
        slug: "mt",
        cookieSettingsLabel: "Settings tal-Cookies",
        showHideDetails: "Uri d-dettalji",
        acceptLabel: "Aċċetta",
        acceptShortLabel: "Aċċetta",
        declineLabel: "Irrifjuta Kollox",
        settingsLabel: "Settings",
        policyLinkLabel: "Il-Politika tagħna dwar il-Privatezza u l-Cookies",
        bannerMessage: "Billi taċċetta l-cookies kollha, qed tappoġġa lil " + document.domain + " fl-iżvilupp ta' soluzzjoni aħjar għalik.</p><p>Agħżel jekk tridx tippermetti biss il-cookies meħtieġa jew tippermetti l-cookies kollha.",
        settingsMessage: "<h3 style=\"    font-size: 25px;\">Int fil-kontroll</h3>"
            + "<p>Aħna u s-sħab affidabbli tagħna nużaw teknoloġiji, bħal cookies, biex niġbru informazzjoni għal skopijiet varji, fosthom:</p>"
            + "<ol>"
            + "<li>Funzjonali</li>"
            + "<li>Analitika</li>"
            + "<li>Marketing</li>"
            + "</ol>"
            + "<p>Billi tikklikkja 'Aċċetta', qed tagħti l-kunsens tiegħek għal dawn l-iskopijiet kollha. Alternattivament, tista' tagħżel l-iskopijiet speċifiċi li taqbel magħhom billi timmarka l-kaxxi u tikklikkja 'Issejvja s-Settings'.</p>"
            + "<p>Tista' tirtira l-kunsens tiegħek fi kwalunkwe ħin billi tikklikkja fuq l-ikona żgħira fil-kantuniera ta' isfel " + arrangeWord + " tal-websajt.</p>",
        settingsMessageSuffix: '<button onClick="showPrivacy()" class="intastellarCookie-settings__privacyLink">Il-politika tal-privatezza ta\' Intastellar Solutions, International</button>',
        categories: categories
    };
})();
