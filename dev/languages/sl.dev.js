(function () {
    var categories = {
    saveSettings: "Zavrni vse",
    necessary: {
        title: "Nujni",
        description: "Nujne spletne tehnologije in piškotki so bistveni za to, da je naša spletna stran za vas dostopna in funkcionalna. Omogočajo ključne funkcije, kot so krmarjenje, pravilen prikaz v vašem brskalniku in upravljanje vaših nastavitev privolitve. Brez teh tehnologij in piškotkov naša spletna stran ne more pravilno delovati."
    },
    functional: {
        title: "Funkcionalni",
        description: "Funkcionalni piškotki nam omogočajo shranjevanje informacij, ki spreminjajo videz ali delovanje spletne strani, na primer vaš izbrani jezik ali regijo."
    },
    statisic: {
        title: "Analitika",
        description: "Nenehno si prizadevamo izboljšati uporabniško izkušnjo in delovanje naše spletne strani. Za to uporabljamo analitične tehnologije (vključno s piškotki), ki psevdonimno merijo in ocenjujejo, katere funkcije in vsebine naše spletne strani se uporabljajo, kako in kako pogosto. Ti podatki nam pomagajo izboljšati stran za uporabnike."
    },
    marketing: {
        title: "Trženje",
        description: "Uporabljamo spletne tehnologije (vključno s piškotki) zaupanja vrednih partnerjev, da vam na spletnih straneh in platformah družbenih medijev prikažemo vsebino in oglase, prilagojene posebej vam. Ta vsebina je izbrana in prikazana na podlagi vašega vedenja pri brskanju. Oglasni in tržni piškotki se uporabljajo za prikaz ustreznih oglasov in kampanj, sledenje obiskovalcem na različnih straneh ter zbiranje informacij za prikaz personaliziranih oglasov."
    }
};
    var arrangeWord = (window.INTA && window.INTA.settings && window.INTA.settings.arrange == "ltr") ? "levem" : "desnem";
    window.__intaCmpLocalePayload = {
        slug: "sl",
        cookieSettingsLabel: "Nastavitve piškotkov",
        showHideDetails: "Prikaži podrobnosti",
        acceptLabel: "Sprejmi",
        acceptShortLabel: "Sprejmi",
        declineLabel: "Zavrni vse",
        settingsLabel: "Nastavitve",
        policyLinkLabel: "Naša politika zasebnosti in piškotkov",
        bannerMessage: "S sprejetjem vseh piškotkov podpirate " + document.domain + " pri razvoju boljše rešitve za vas.</p><p>Izberite, ali želite dovoliti samo nujne piškotke ali dovoliti vse piškotke.",
        settingsMessage: "<h3 style=\"    font-size: 25px;\">Nadzor imate v svojih rokah</h3>"
            + "<p>Mi in naši zaupanja vredni partnerji uporabljamo tehnologije, kot so piškotki, za zbiranje informacij za različne namene, med drugim:</p>"
            + "<ol>"
            + "<li>Funkcionalni</li>"
            + "<li>Analitika</li>"
            + "<li>Trženje</li>"
            + "</ol>"
            + "<p>S klikom na „Sprejmi” se strinjate z vsemi temi nameni. Druga možnost je, da izberete določene namene, s katerimi se strinjate, tako da označite potrditvena polja in kliknete „Shrani nastavitve”.</p>"
            + "<p>Svojo privolitev lahko kadar koli prekličete s klikom na majhno ikono v spodnjem " + arrangeWord + " kotu spletne strani.</p>",
        settingsMessageSuffix: '<button onClick="showPrivacy()" class="intastellarCookie-settings__privacyLink">Politika zasebnosti Intastellar Solutions, International</button>',
        categories: categories
    };
})();
