(function () {
    var categories = {
    saveSettings: "Tolak Semua",
    necessary: {
        title: "Penting",
        description: "Teknologi web dan cookie penting sangat diperlukan agar situs web kami dapat diakses dan berfungsi untuk Anda. Cookie ini memungkinkan fitur utama, seperti navigasi, tampilan yang benar di browser Anda, dan pengelolaan preferensi persetujuan Anda. Tanpa teknologi dan cookie ini, situs web kami tidak dapat berfungsi dengan baik."
    },
    functional: {
        title: "Fungsional",
        description: "Cookie fungsional memungkinkan kami menyimpan informasi yang mengubah tampilan atau perilaku situs web, seperti bahasa atau wilayah pilihan Anda."
    },
    statisic: {
        title: "Analitik",
        description: "Kami berupaya terus meningkatkan pengalaman pengguna dan performa situs web kami. Untuk itu, kami menggunakan teknologi analitik (termasuk cookie) yang secara anonim mengukur dan menilai fitur dan konten mana dari situs web kami yang digunakan, bagaimana, dan seberapa sering. Data ini membantu kami meningkatkan situs kami bagi pengguna."
    },
    marketing: {
        title: "Pemasaran",
        description: "Kami menggunakan teknologi web (termasuk cookie) dari mitra tepercaya untuk menyajikan konten dan iklan yang disesuaikan khusus untuk Anda di situs web dan platform media sosial. Konten ini dipilih dan ditampilkan berdasarkan perilaku menjelajah Anda. Cookie iklan dan pemasaran digunakan untuk menampilkan iklan dan kampanye yang relevan, melacak pengunjung di berbagai situs, dan mengumpulkan informasi untuk menyajikan iklan yang dipersonalisasi."
    }
};
    var arrangeWord = (window.INTA && window.INTA.settings && window.INTA.settings.arrange == "ltr") ? "kiri" : "kanan";
    window.__intaCmpLocalePayload = {
        slug: "id",
        cookieSettingsLabel: "Pengaturan Cookie",
        showHideDetails: "Tampilkan detail",
        acceptLabel: "Terima",
        acceptShortLabel: "Terima",
        declineLabel: "Tolak Semua",
        settingsLabel: "Pengaturan",
        policyLinkLabel: "Kebijakan Privasi dan Cookie Kami",
        bannerMessage: "Dengan menerima semua cookie, Anda mendukung " + document.domain + " dalam mengembangkan solusi yang lebih baik untuk Anda.</p><p>Pilih apakah Anda hanya ingin mengizinkan cookie yang penting atau mengizinkan semua cookie.",
        settingsMessage: "<h3 style=\"    font-size: 25px;\">Anda memegang kendali</h3>"
            + "<p>Kami dan mitra tepercaya kami menggunakan teknologi, seperti cookie, untuk mengumpulkan informasi untuk berbagai tujuan, termasuk:</p>"
            + "<ol>"
            + "<li>Fungsional</li>"
            + "<li>Analitik</li>"
            + "<li>Pemasaran</li>"
            + "</ol>"
            + "<p>Dengan mengklik 'Terima', Anda menyetujui semua tujuan ini. Sebagai alternatif, Anda dapat memilih tujuan tertentu yang Anda setujui dengan mencentang kotak dan mengklik 'Simpan Pengaturan'.</p>"
            + "<p>Anda dapat menarik persetujuan Anda kapan saja dengan mengklik ikon kecil di sudut bawah " + arrangeWord + " situs web.</p>",
        settingsMessageSuffix: '<button onClick="showPrivacy()" class="intastellarCookie-settings__privacyLink">Kebijakan privasi Intastellar Solutions, International</button>',
        categories: categories
    };
})();
