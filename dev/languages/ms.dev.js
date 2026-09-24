(function () {
    var categories = {
    saveSettings: "Tolak Semua",
    necessary: {
        title: "Perlu",
        description: "Teknologi web dan kuki yang perlu adalah penting untuk menjadikan laman web kami boleh diakses dan berfungsi untuk anda. Ia membolehkan ciri utama seperti navigasi, paparan yang betul dalam pelayar anda, dan pengurusan pilihan persetujuan anda. Tanpa teknologi dan kuki ini, laman web kami tidak dapat berfungsi dengan baik."
    },
    functional: {
        title: "Fungsian",
        description: "Kuki fungsian membolehkan kami menyimpan maklumat yang mengubah rupa atau tingkah laku laman web, seperti bahasa atau wilayah pilihan anda."
    },
    statisic: {
        title: "Analitik",
        description: "Kami sentiasa berusaha untuk meningkatkan pengalaman pengguna dan prestasi laman web kami. Untuk mencapai ini, kami menggunakan teknologi analitik (termasuk kuki) yang secara tanpa nama mengukur dan menilai ciri dan kandungan laman web kami yang digunakan, bagaimana, dan berapa kerap. Data ini membantu kami meningkatkan laman web kami untuk pengguna."
    },
    marketing: {
        title: "Pemasaran",
        description: "Kami menggunakan teknologi web (termasuk kuki) daripada rakan kongsi yang dipercayai untuk menyampaikan kandungan dan iklan yang disesuaikan khas untuk anda di laman web dan platform media sosial. Kandungan ini dipilih dan dipaparkan berdasarkan tingkah laku pelayaran anda. Kuki iklan dan pemasaran digunakan untuk memaparkan iklan dan kempen yang relevan, menjejaki pelawat merentas laman, dan mengumpul maklumat untuk menyampaikan iklan yang diperibadikan."
    }
};
    var arrangeWord = (window.INTA && window.INTA.settings && window.INTA.settings.arrange == "ltr") ? "kiri" : "kanan";
    window.__intaCmpLocalePayload = {
        slug: "ms",
        cookieSettingsLabel: "Tetapan Kuki",
        showHideDetails: "Tunjukkan butiran",
        acceptLabel: "Terima",
        acceptShortLabel: "Terima",
        declineLabel: "Tolak Semua",
        settingsLabel: "Tetapan",
        policyLinkLabel: "Dasar Privasi dan Kuki Kami",
        bannerMessage: "Dengan menerima semua kuki, anda menyokong " + document.domain + " dalam membangunkan penyelesaian yang lebih baik untuk anda.</p><p>Pilih sama ada anda hanya mahu membenarkan kuki yang perlu atau membenarkan semua kuki.",
        settingsMessage: "<h3 style=\"    font-size: 25px;\">Anda mempunyai kawalan</h3>"
            + "<p>Kami dan rakan kongsi kami yang dipercayai menggunakan teknologi, seperti kuki, untuk mengumpul maklumat bagi pelbagai tujuan, termasuk:</p>"
            + "<ol>"
            + "<li>Fungsian</li>"
            + "<li>Analitik</li>"
            + "<li>Pemasaran</li>"
            + "</ol>"
            + "<p>Dengan mengklik 'Terima', anda bersetuju dengan semua tujuan ini. Sebagai alternatif, anda boleh memilih tujuan tertentu yang anda setujui dengan menandakan kotak semak dan mengklik 'Simpan Tetapan'.</p>"
            + "<p>Anda boleh menarik balik persetujuan anda pada bila-bila masa dengan mengklik ikon kecil di penjuru bawah " + arrangeWord + " laman web.</p>",
        settingsMessageSuffix: '<button onClick="showPrivacy()" class="intastellarCookie-settings__privacyLink">Dasar privasi Intastellar Solutions, International</button>',
        categories: categories
    };
})();
