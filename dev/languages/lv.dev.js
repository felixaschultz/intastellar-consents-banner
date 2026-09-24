(function () {
    var categories = {
    saveSettings: "Noraidīt visu",
    necessary: {
        title: "Nepieciešamie",
        description: "Nepieciešamās tīmekļa tehnoloģijas un sīkfaili ir būtiski, lai mūsu vietne būtu jums pieejama un funkcionāla. Tie nodrošina galvenās funkcijas, piemēram, navigāciju, pareizu attēlošanu jūsu pārlūkprogrammā un jūsu piekrišanas iestatījumu pārvaldību. Bez šīm tehnoloģijām un sīkfailiem mūsu vietne nevar pareizi darboties."
    },
    functional: {
        title: "Funkcionālie",
        description: "Funkcionālie sīkfaili ļauj mums saglabāt informāciju, kas maina vietnes izskatu vai darbību, piemēram, jūsu vēlamo valodu vai reģionu."
    },
    statisic: {
        title: "Analītika",
        description: "Mēs pastāvīgi cenšamies uzlabot lietotāju pieredzi un mūsu vietnes veiktspēju. Lai to panāktu, mēs izmantojam analītiskās tehnoloģijas (tostarp sīkfailus), kas pseidonīmi mēra un novērtē, kuras mūsu vietnes funkcijas un saturs tiek izmantoti, kā un cik bieži. Šie dati mums palīdz uzlabot vietni lietotājiem."
    },
    marketing: {
        title: "Mārketings",
        description: "Mēs izmantojam uzticamu partneru tīmekļa tehnoloģijas (tostarp sīkfailus), lai piedāvātu jums īpaši pielāgotu saturu un reklāmas tīmekļa vietnēs un sociālo mediju platformās. Šis saturs tiek atlasīts un rādīts, pamatojoties uz jūsu pārlūkošanas paradumiem. Reklāmas un mārketinga sīkfaili tiek izmantoti, lai rādītu atbilstošas reklāmas un kampaņas, izsekotu apmeklētājiem dažādās vietnēs un vāktu informāciju, lai piedāvātu personalizētas reklāmas."
    }
};
    var arrangeWord = (window.INTA && window.INTA.settings && window.INTA.settings.arrange == "ltr") ? "kreisajā" : "labajā";
    window.__intaCmpLocalePayload = {
        slug: "lv",
        cookieSettingsLabel: "Sīkfailu iestatījumi",
        showHideDetails: "Rādīt detaļas",
        acceptLabel: "Piekrītu",
        acceptShortLabel: "Piekrītu",
        declineLabel: "Noraidīt visu",
        settingsLabel: "Iestatījumi",
        policyLinkLabel: "Mūsu privātuma un sīkfailu politika",
        bannerMessage: "Pieņemot visus sīkfailus, jūs atbalstāt " + document.domain + " labāka risinājuma izstrādē jums.</p><p>Izvēlieties, vai vēlaties atļaut tikai nepieciešamos sīkfailus, vai atļaut visus sīkfailus.",
        settingsMessage: "<h3 style=\"    font-size: 25px;\">Jums ir kontrole</h3>"
            + "<p>Mēs un mūsu uzticamie partneri izmantojam tehnoloģijas, piemēram, sīkfailus, lai vāktu informāciju dažādiem nolūkiem, tostarp:</p>"
            + "<ol>"
            + "<li>Funkcionālie</li>"
            + "<li>Analītika</li>"
            + "<li>Mārketings</li>"
            + "</ol>"
            + "<p>Noklikšķinot uz „Piekrītu”, jūs piekrītat visiem šiem nolūkiem. Varat arī izvēlēties konkrētus nolūkus, kuriem piekrītat, atzīmējot izvēles rūtiņas un noklikšķinot uz „Saglabāt iestatījumus”.</p>"
            + "<p>Jūs varat jebkurā laikā atsaukt savu piekrišanu, noklikšķinot uz mazās ikonas vietnes apakšējā " + arrangeWord + " stūrī.</p>",
        settingsMessageSuffix: '<button onClick="showPrivacy()" class="intastellarCookie-settings__privacyLink">Intastellar Solutions, International privātuma politika</button>',
        categories: categories
    };
})();
