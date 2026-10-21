(function () {
    var categories = {
    saveSettings: "Odbij sve",
    necessary: {
        title: "Nužni",
        description: "Nužne web tehnologije i kolačići neophodni su kako bi naša web stranica bila dostupna i funkcionalna za vas. Omogućuju ključne funkcije poput navigacije, ispravnog prikaza u vašem pregledniku i upravljanja vašim postavkama privole. Bez ovih tehnologija i kolačića naša web stranica ne može ispravno funkcionirati."
    },
    functional: {
        title: "Funkcionalni",
        description: "Funkcionalni kolačići omogućuju nam pohranu informacija koje mijenjaju izgled ili ponašanje web stranice, poput vašeg preferiranog jezika ili regije."
    },
    statisic: {
        title: "Analitika",
        description: "Nastojimo neprestano poboljšavati korisničko iskustvo i performanse naše web stranice. Kako bismo to postigli, koristimo analitičke tehnologije (uključujući kolačiće) koje pseudonimno mjere i procjenjuju koje se značajke i sadržaj naše web stranice koriste, kako i koliko često. Ovi podaci nam pomažu poboljšati stranicu za korisnike."
    },
    marketing: {
        title: "Marketing",
        description: "Koristimo web tehnologije (uključujući kolačiće) pouzdanih partnera kako bismo vam pružili sadržaj i oglase posebno prilagođene vama na web stranicama i platformama društvenih medija. Ovaj sadržaj se odabire i prikazuje na temelju vašeg ponašanja pri pregledavanju. Oglasni i marketinški kolačići koriste se za prikaz relevantnih oglasa i kampanja, praćenje posjetitelja na različitim stranicama i prikupljanje informacija za prikaz personaliziranih oglasa."
    },
    security: {
        title: "Sigurnost",
        description: "Sigurnosni kolačići pomažu u prepoznavanju i sprječavanju sigurnosnih rizika, otkrivanju prijevarnih aktivnosti te zaštiti naše web stranice i njezinih korisnika."
    },
    unclassified: {
        title: "Nekategorizirani",
        description: "Kolačići koji još nisu razvrstani u kategoriju navedeni su ovdje. Surađujemo s pružateljima ovih pojedinačnih kolačića kako bismo ih razvrstali."
    }
};
    var arrangeWord = (window.INTA && window.INTA.settings && window.INTA.settings.arrange == "ltr") ? "lijevom" : "desnom";
    window.__intaCmpLocalePayload = {
        slug: "hr",
        cookieSettingsLabel: "Postavke kolačića",
        showHideDetails: "Prikaži detalje",
        acceptLabel: "Prihvati",
        acceptShortLabel: "Prihvati",
        declineLabel: "Odbij sve",
        settingsLabel: "Postavke",
        policyLinkLabel: "Naša politika privatnosti i kolačića",
        bannerMessage: "Prihvaćanjem svih kolačića podržavate " + document.domain + " u razvoju boljeg rješenja za vas.</p><p>Odaberite želite li dopustiti samo nužne kolačiće ili dopustiti sve kolačiće.",
        settingsMessage: "<h3 style=\"    font-size: 25px;\">Vi imate kontrolu</h3>"
            + "<p>Mi i naši pouzdani partneri koristimo tehnologije, poput kolačića, za prikupljanje informacija u razne svrhe, uključujući:</p>"
            + "<ol>"
            + "<li>Funkcionalni</li>"
            + "<li>Analitika</li>"
            + "<li>Marketing</li>"
            + "</ol>"
            + "<p>Klikom na „Prihvati” pristajete na sve ove svrhe. Alternativno, možete odabrati određene svrhe s kojima se slažete označavanjem kvačica i klikom na „Spremi postavke”.</p>"
            + "<p>Svoju privolu možete povući u bilo kojem trenutku klikom na malu ikonu u donjem " + arrangeWord + " kutu web stranice.</p>",
        settingsMessageSuffix: '<button onClick="showPrivacy()" class="intastellarCookie-settings__privacyLink">Politika privatnosti tvrtke Intastellar Solutions, International</button>',
        categories: categories
    };
})();
