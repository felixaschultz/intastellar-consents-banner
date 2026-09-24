(function () {
    var categories = {
    saveSettings: "Odmítnout vše",
    necessary: {
        title: "Nezbytné",
        description: "Nezbytné webové technologie a soubory cookie jsou nutné k tomu, aby byl náš web pro vás přístupný a funkční. Umožňují klíčové funkce, jako je navigace, správné zobrazení ve vašem prohlížeči a správa vašich preferencí souhlasu. Bez těchto technologií a souborů cookie nemůže náš web fungovat správně."
    },
    functional: {
        title: "Funkční",
        description: "Funkční soubory cookie nám umožňují ukládat informace, které mění vzhled nebo chování webu, například váš preferovaný jazyk nebo region."
    },
    statisic: {
        title: "Analytika",
        description: "Neustále se snažíme zlepšovat uživatelský zážitek a výkon našeho webu. K tomu využíváme analytické technologie (včetně souborů cookie), které pseudonymně měří a vyhodnocují, které funkce a obsah našeho webu jsou používány, jak a jak často. Tato data nám pomáhají web pro uživatele zlepšovat."
    },
    marketing: {
        title: "Marketing",
        description: "Využíváme webové technologie (včetně souborů cookie) od důvěryhodných partnerů k poskytování obsahu a reklam přizpůsobených právě vám na webových stránkách a platformách sociálních médií. Tento obsah je vybírán a zobrazován na základě vašeho chování při procházení. Reklamní a marketingové soubory cookie se používají k zobrazování relevantních reklam a kampaní, sledování návštěvníků napříč weby a shromažďování informací pro zobrazení personalizovaných reklam."
    }
};
    var arrangeWord = (window.INTA && window.INTA.settings && window.INTA.settings.arrange == "ltr") ? "levém" : "pravém";
    window.__intaCmpLocalePayload = {
        slug: "cs",
        cookieSettingsLabel: "Nastavení cookies",
        showHideDetails: "Zobrazit podrobnosti",
        acceptLabel: "Přijmout",
        acceptShortLabel: "Přijmout",
        declineLabel: "Odmítnout vše",
        settingsLabel: "Nastavení",
        policyLinkLabel: "Naše zásady ochrany osobních údajů a cookies",
        bannerMessage: "Přijetím všech souborů cookie podporujete " + document.domain + " ve vývoji lepšího řešení pro vás.</p><p>Vyberte, zda chcete povolit pouze nezbytné soubory cookie, nebo povolit všechny soubory cookie.",
        settingsMessage: "<h3 style=\"    font-size: 25px;\">Máte vše pod kontrolou</h3>"
            + "<p>My i naši důvěryhodní partneři používáme technologie, jako jsou soubory cookie, ke shromažďování informací pro různé účely, mimo jiné:</p>"
            + "<ol>"
            + "<li>Funkční</li>"
            + "<li>Analytika</li>"
            + "<li>Marketing</li>"
            + "</ol>"
            + "<p>Kliknutím na „Přijmout“ souhlasíte se všemi těmito účely. Případně si můžete vybrat konkrétní účely, se kterými souhlasíte, zaškrtnutím políček a kliknutím na „Uložit nastavení“.</p>"
            + "<p>Svůj souhlas můžete kdykoli odvolat kliknutím na malou ikonu v " + arrangeWord + " dolním rohu webu.</p>",
        settingsMessageSuffix: '<button onClick="showPrivacy()" class="intastellarCookie-settings__privacyLink">Zásady ochrany osobních údajů Intastellar Solutions, International</button>',
        categories: categories
    };
})();
