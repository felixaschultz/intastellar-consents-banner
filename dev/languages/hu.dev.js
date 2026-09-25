(function () {
    var categories = {
    saveSettings: "Összes elutasítása",
    necessary: {
        title: "Szükséges",
        description: "A szükséges webes technológiák és cookie-k elengedhetetlenek ahhoz, hogy weboldalunk elérhető és működőképes legyen az Ön számára. Olyan alapvető funkciókat tesznek lehetővé, mint a navigáció, a böngészőben történő megfelelő megjelenítés, valamint a hozzájárulási beállítások kezelése. Ezen technológiák és cookie-k nélkül weboldalunk nem tud megfelelően működni."
    },
    functional: {
        title: "Funkcionális",
        description: "A funkcionális cookie-k lehetővé teszik, hogy olyan információkat tároljunk, amelyek megváltoztatják a weboldal megjelenését vagy viselkedését, például az Ön preferált nyelvét vagy régióját."
    },
    statisic: {
        title: "Analitika",
        description: "Folyamatosan törekszünk weboldalunk felhasználói élményének és teljesítményének javítására. Ennek érdekében analitikai technológiákat (beleértve a cookie-kat is) használunk, amelyek álnevesítve mérik és értékelik, hogy weboldalunk mely funkcióit és tartalmait, hogyan és milyen gyakran használják. Ezek az adatok segítenek nekünk javítani oldalunkat a felhasználók számára."
    },
    marketing: {
        title: "Marketing",
        description: "Megbízható partnereink webes technológiáit (beleértve a cookie-kat is) használjuk arra, hogy kifejezetten Önnek szabott tartalmakat és hirdetéseket jelenítsünk meg weboldalakon és közösségi médiaplatformokon. Ezt a tartalmat böngészési viselkedése alapján választjuk ki és jelenítjük meg. A hirdetési és marketing cookie-kat releváns hirdetések és kampányok megjelenítésére, a látogatók oldalak közötti nyomon követésére, valamint a személyre szabott hirdetések megjelenítéséhez szükséges információk gyűjtésére használjuk."
    },
    security: {
        title: "Biztonság",
        description: "A biztonsági cookie-k segítenek azonosítani és megelőzni a biztonsági kockázatokat, felismerni a csalárd tevékenységeket, valamint megvédeni weboldalunkat és felhasználóit."
    },
    unclassified: {
        title: "Besorolatlan",
        description: "Az itt felsorolt cookie-k még nincsenek kategóriába sorolva. Ezen egyedi cookie-k szolgáltatóival együttműködve dolgozunk a besorolásukon."
    }
};
    var arrangeWord = (window.INTA && window.INTA.settings && window.INTA.settings.arrange == "ltr") ? "bal" : "jobb";
    window.__intaCmpLocalePayload = {
        slug: "hu",
        cookieSettingsLabel: "Cookie-beállítások",
        showHideDetails: "Részletek megjelenítése",
        acceptLabel: "Elfogadás",
        acceptShortLabel: "Elfogadás",
        declineLabel: "Összes elutasítása",
        settingsLabel: "Beállítások",
        policyLinkLabel: "Adatvédelmi és cookie-szabályzatunk",
        bannerMessage: "Az összes cookie elfogadásával támogatja " + document.domain + " abban, hogy jobb megoldást fejlesszen az Ön számára.</p><p>Válassza ki, hogy csak a szükséges cookie-kat szeretné engedélyezni, vagy az összes cookie-t.",
        settingsMessage: "<h3 style=\"    font-size: 25px;\">Ön irányítja</h3>"
            + "<p>Mi és megbízható partnereink olyan technológiákat használunk, mint a cookie-k, hogy különböző célokra információkat gyűjtsünk, többek között:</p>"
            + "<ol>"
            + "<li>Funkcionális</li>"
            + "<li>Analitika</li>"
            + "<li>Marketing</li>"
            + "</ol>"
            + "<p>Az „Elfogadás” gombra kattintva Ön hozzájárul mindezen célokhoz. Alternatív megoldásként kiválaszthatja azokat a konkrét célokat, amelyekhez hozzájárul, a jelölőnégyzetek bejelölésével és a „Beállítások mentése” gombra kattintva.</p>"
            + "<p>Hozzájárulását bármikor visszavonhatja a weboldal alsó " + arrangeWord + " sarkában található kis ikonra kattintva.</p>",
        settingsMessageSuffix: '<button onClick="showPrivacy()" class="intastellarCookie-settings__privacyLink">Intastellar Solutions, International adatvédelmi szabályzata</button>',
        categories: categories
    };
})();
