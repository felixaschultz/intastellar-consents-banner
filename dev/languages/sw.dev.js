(function () {
    var categories = {
    saveSettings: "Kataa Vyote",
    necessary: {
        title: "Muhimu",
        description: "Teknolojia za wavuti na vidakuzi muhimu ni muhimu ili kufanya tovuti yetu ipatikane na ifanye kazi kwa ajili yako. Vinawezesha vipengele muhimu kama vile uabiri, uonyeshaji sahihi kwenye kivinjari chako, na usimamizi wa mapendeleo yako ya idhini. Bila teknolojia na vidakuzi hivi, tovuti yetu haiwezi kufanya kazi ipasavyo."
    },
    functional: {
        title: "Utendaji",
        description: "Vidakuzi vya utendaji vinaturuhusu kuhifadhi taarifa zinazobadilisha jinsi tovuti inavyoonekana au kufanya kazi, kama vile lugha au eneo unalopendelea."
    },
    statisic: {
        title: "Uchambuzi",
        description: "Tunajitahidi kuboresha kwa kuendelea uzoefu wa mtumiaji na utendaji wa tovuti yetu. Ili kufanikisha hili, tunatumia teknolojia za uchambuzi (ikiwa ni pamoja na vidakuzi) ambazo hupima na kutathmini bila kutambulisha jina ni vipengele na maudhui gani ya tovuti yetu vinavyotumika, jinsi gani, na mara ngapi. Data hii hutusaidia kuboresha tovuti kwa watumiaji."
    },
    marketing: {
        title: "Uuzaji",
        description: "Tunatumia teknolojia za wavuti (ikiwa ni pamoja na vidakuzi) kutoka kwa washirika wanaoaminika ili kukupatia maudhui na matangazo yaliyoundwa mahususi kwa ajili yako kwenye tovuti na mitandao ya kijamii. Maudhui haya huchaguliwa na kuonyeshwa kulingana na tabia yako ya kuvinjari. Vidakuzi vya matangazo na uuzaji hutumika kuonyesha matangazo na kampeni zinazofaa, kufuatilia wageni kwenye tovuti mbalimbali, na kukusanya taarifa ili kuwasilisha matangazo binafsishwa."
    },
    security: {
        title: "Usalama",
        description: "Vidakuzi vya usalama husaidia kutambua na kuzuia hatari za usalama, kugundua shughuli za udanganyifu, na kulinda tovuti yetu na watumiaji wake."
    },
    unclassified: {
        title: "Ambavyo Havijawekwa Kundi",
        description: "Vidakuzi ambavyo bado havijawekwa katika kundi lolote vimeorodheshwa hapa. Tunafanya kazi na watoa huduma wa vidakuzi hivi mahususi ili kuvipanga katika makundi."
    }
};
    var arrangeWord = (window.INTA && window.INTA.settings && window.INTA.settings.arrange == "ltr") ? "kushoto" : "kulia";
    window.__intaCmpLocalePayload = {
        slug: "sw",
        cookieSettingsLabel: "Mipangilio ya Vidakuzi",
        showHideDetails: "Onyesha maelezo",
        acceptLabel: "Kubali",
        acceptShortLabel: "Kubali",
        declineLabel: "Kataa Vyote",
        settingsLabel: "Mipangilio",
        policyLinkLabel: "Sera yetu ya Faragha na Vidakuzi",
        bannerMessage: "Kwa kukubali vidakuzi vyote, unamuunga mkono " + document.domain + " katika kutengeneza suluhisho bora zaidi kwa ajili yako.</p><p>Chagua kama unataka kuruhusu vidakuzi muhimu pekee au kuruhusu vidakuzi vyote.",
        settingsMessage: "<h3 style=\"    font-size: 25px;\">Uko na udhibiti</h3>"
            + "<p>Sisi na washirika wetu wanaoaminika tunatumia teknolojia, kama vidakuzi, kukusanya taarifa kwa madhumuni mbalimbali, ikiwa ni pamoja na:</p>"
            + "<ol>"
            + "<li>Utendaji</li>"
            + "<li>Uchambuzi</li>"
            + "<li>Uuzaji</li>"
            + "</ol>"
            + "<p>Kwa kubofya 'Kubali', unakubali madhumuni haya yote. Vinginevyo, unaweza kuchagua madhumuni mahususi unayokubaliana nayo kwa kuweka alama kwenye visanduku na kubofya 'Hifadhi Mipangilio'.</p>"
            + "<p>Unaweza kuondoa idhini yako wakati wowote kwa kubofya aikoni ndogo kwenye kona ya chini " + arrangeWord + " ya tovuti.</p>",
        settingsMessageSuffix: '<button onClick="showPrivacy()" class="intastellarCookie-settings__privacyLink">Sera ya faragha ya Intastellar Solutions, International</button>',
        categories: categories
    };
})();
