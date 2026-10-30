
/* =========================================================
   RAHMA ALIA — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu");
const nav = document.querySelector("#nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav?.classList.remove("open");
    });
});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#nav a");

if ("IntersectionObserver" in window) {
    const navigationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `#nav a[href="#${entry.target.id}"]`
                );

                activeLink?.classList.add("active");
            });
        },
        {
            rootMargin: "-40% 0px -50% 0px"
        }
    );

    sections.forEach((section) => {
        navigationObserver.observe(section);
    });
}


/* =========================================================
   MARQUEE
========================================================= */

const marquee = document.querySelector(".marquee");
const marqueeTrack = document.querySelector(".marquee-track");

if (marquee && marqueeTrack) {
    marquee.addEventListener("mouseenter", () => {
        marqueeTrack.style.animationPlayState = "paused";
    });

    marquee.addEventListener("mouseleave", () => {
        marqueeTrack.style.animationPlayState = "running";
    });
}


/* =========================================================
   EDUCATION MODAL
========================================================= */

const educationDetailButton =
    document.querySelector("#educationDetailButton");

const educationModal =
    document.querySelector("#educationModal");

const educationModalClose =
    document.querySelector("#educationModalClose");

const educationModalBackdrop =
    document.querySelector(".education-modal-backdrop");

const galleryImages =
    document.querySelectorAll(".gallery-photo");

const galleryCounter =
    document.querySelector("#galleryCounter");

const galleryTitle =
    document.querySelector("#galleryTitle");

const galleryPrev =
    document.querySelector("#galleryPrev");

const galleryNext =
    document.querySelector("#galleryNext");

const galleryDots =
    document.querySelectorAll(".gallery-dot");

let currentSlide = 0;

function updateGallery(index) {
    if (!galleryImages.length) return;

    if (index < 0) {
        index = galleryImages.length - 1;
    }

    if (index >= galleryImages.length) {
        index = 0;
    }

    currentSlide = index;

    galleryImages.forEach((image, imageIndex) => {
        image.classList.toggle(
            "active",
            imageIndex === currentSlide
        );
    });

    if (galleryCounter) {
        galleryCounter.textContent =
            `${currentSlide + 1} / ${galleryImages.length}`;
    }

    galleryDots.forEach((dot, dotIndex) => {
        dot.classList.toggle(
            "active",
            dotIndex === currentSlide
        );
    });

    if (galleryTitle && galleryImages[currentSlide]) {
        galleryTitle.textContent =
            galleryImages[currentSlide].alt;
    }
}

if (educationDetailButton && educationModal) {
    educationDetailButton.addEventListener("click", () => {
        educationModal.classList.add("open");
        educationModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        updateGallery(0);
    });
}

function closeEducationModal() {
    if (!educationModal) return;

    educationModal.classList.remove("open");
    educationModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

educationModalClose?.addEventListener(
    "click",
    closeEducationModal
);

educationModalBackdrop?.addEventListener(
    "click",
    closeEducationModal
);

galleryNext?.addEventListener("click", () => {
    updateGallery(currentSlide + 1);
});

galleryPrev?.addEventListener("click", () => {
    updateGallery(currentSlide - 1);
});

galleryDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        updateGallery(Number(dot.dataset.slide));
    });
});


/* =========================================================
   EXPERIENCE DETAIL MODAL
========================================================= */

const experienceDetailButton =
    document.querySelector("#experienceDetailButton");

const experienceModal =
    document.querySelector("#experienceModal");

const experienceModalClose =
    document.querySelector("#experienceModalClose");

const experienceModalBackdrop =
    document.querySelector(".experience-modal-backdrop");

const experienceGalleryImages =
    document.querySelectorAll(".experience-gallery-photo");

const experienceGalleryCounter =
    document.querySelector("#experienceGalleryCounter");

const experienceGalleryTitle =
    document.querySelector("#experienceGalleryTitle");

const experienceGalleryPrev =
    document.querySelector("#experienceGalleryPrev");

const experienceGalleryNext =
    document.querySelector("#experienceGalleryNext");

const experienceGalleryDots =
    document.querySelectorAll(".experience-gallery-dot");

let currentExperienceSlide = 0;

function updateExperienceGallery(index) {
    if (!experienceGalleryImages.length) return;

    if (index < 0) {
        index = experienceGalleryImages.length - 1;
    }

    if (index >= experienceGalleryImages.length) {
        index = 0;
    }

    currentExperienceSlide = index;

    experienceGalleryImages.forEach((image, imageIndex) => {
        image.classList.toggle(
            "active",
            imageIndex === currentExperienceSlide
        );
    });

    if (experienceGalleryCounter) {
        experienceGalleryCounter.textContent =
            `${currentExperienceSlide + 1} / ${experienceGalleryImages.length}`;
    }

    experienceGalleryDots.forEach((dot, dotIndex) => {
        dot.classList.toggle(
            "active",
            dotIndex === currentExperienceSlide
        );
    });

    if (
        experienceGalleryTitle &&
        experienceGalleryImages[currentExperienceSlide]
    ) {
        experienceGalleryTitle.textContent =
            experienceGalleryImages[currentExperienceSlide].alt;
    }
}

if (experienceDetailButton && experienceModal) {
    experienceDetailButton.addEventListener("click", () => {
        experienceModal.classList.add("open");
        experienceModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        updateExperienceGallery(0);
    });
}

function closeExperienceModal() {
    if (!experienceModal) return;

    experienceModal.classList.remove("open");
    experienceModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

experienceModalClose?.addEventListener(
    "click",
    closeExperienceModal
);

experienceModalBackdrop?.addEventListener(
    "click",
    closeExperienceModal
);

experienceGalleryNext?.addEventListener("click", () => {
    updateExperienceGallery(currentExperienceSlide + 1);
});

experienceGalleryPrev?.addEventListener("click", () => {
    updateExperienceGallery(currentExperienceSlide - 1);
});

experienceGalleryDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        updateExperienceGallery(Number(dot.dataset.slide));
    });
});


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (educationModal?.classList.contains("open")) {
            closeEducationModal();
        }

        if (experienceModal?.classList.contains("open")) {
            closeExperienceModal();
        }
    }

    if (educationModal?.classList.contains("open")) {
        if (event.key === "ArrowRight") {
            updateGallery(currentSlide + 1);
        }

        if (event.key === "ArrowLeft") {
            updateGallery(currentSlide - 1);
        }
    }

    if (experienceModal?.classList.contains("open")) {
        if (event.key === "ArrowRight") {
            updateExperienceGallery(currentExperienceSlide + 1);
        }

        if (event.key === "ArrowLeft") {
            updateExperienceGallery(currentExperienceSlide - 1);
        }
    }
});

updateGallery(0);
updateExperienceGallery(0);


/* =========================================================
   SKILL / TOOLS CATEGORY FILTER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons =
        document.querySelectorAll(".skill-filter");

    const skillCards =
        document.querySelectorAll(".skill-tool-card");

    if (!filterButtons.length || !skillCards.length) return;

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory = button.dataset.filter;

            filterButtons.forEach((item) => {
                const isActive = item === button;

                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });

            skillCards.forEach((card) => {
                const categories = (
                    card.dataset.category || ""
                ).trim().split(/\s+/);

                const shouldShow =
                    selectedCategory === "all" ||
                    categories.includes(selectedCategory);

                card.classList.toggle("is-hidden", !shouldShow);
            });
        });
    });
});


/* =========================================================
   SCROLL REVEAL — EXCEPT HOME
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.querySelector(
        "#home, #hero, .home-section, .hero-section"
    );

    const revealSections = document.querySelectorAll(
        "main section, body > section, .page-section"
    );

    revealSections.forEach((section) => {
        if (
            section === homeSection ||
            section.id === "home" ||
            section.id === "hero"
        ) {
            return;
        }

        const elements = section.querySelectorAll([
            ".skill-tool-card",
            ".project-card",
            ".certificate-card",
            ".experience-card",
            ".about-card",
            ".contact-card",
            ".timeline-item",
            ".project-item",
            ".certificate-item",
            ".about-content",
            ".experience-content",
            ".contact-content"
        ].join(", "));

        const targets = elements.length
            ? Array.from(elements)
            : Array.from(section.children).filter(
                (element) => !element.matches("script, style")
            );

        targets.forEach((element, index) => {
            if (element.classList.contains("scroll-reveal")) return;

            element.classList.add("scroll-reveal");

            element.style.setProperty(
                "--reveal-delay",
                `${(index % 5) * 180}ms`
            );
        });
    });

    const revealElements =
        document.querySelectorAll(".scroll-reveal");

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
        reduceMotion ||
        !("IntersectionObserver" in window)
    ) {
        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const revealObserver = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
});



/* =========================================================
   PROJECT CATEGORY FILTER
   Mendukung beberapa kategori dalam satu proyek
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const projectSection = document.querySelector("#proyek");

    if (!projectSection) return;

    const filterButtons = projectSection.querySelectorAll(
        ".project-filter"
    );

    const projectCards = projectSection.querySelectorAll(
        ".showcase-project-card"
    );

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory =
                button.dataset.projectFilter;

            // Perbarui tombol aktif
            filterButtons.forEach((item) => {
                const isActive = item === button;

                item.classList.toggle("active", isActive);
                item.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );
            });

            // Filter proyek berdasarkan semua kategorinya
            projectCards.forEach((card) => {
                const categories = (
                    card.dataset.projectCategory || ""
                )
                    .trim()
                    .split(/\s+/);

                const shouldShow =
                    selectedCategory === "all" ||
                    categories.includes(selectedCategory);

                card.classList.toggle(
                    "is-filtered-out",
                    !shouldShow
                );
            });
        });
    });
});



/* =========================================================
   PROJECT & CERTIFICATE CASE STUDY MODAL
   Menggunakan modal projectCaseStudyModal yang sudah ada
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("projectCaseStudyModal");

    if (!modal) return;

    const galleryImage =
        document.getElementById("projectGalleryImage");

    const galleryEmpty =
        document.getElementById("projectGalleryEmpty");

    const galleryCounter =
        document.getElementById("projectGalleryCounter");

    const galleryCaption =
        document.getElementById("projectGalleryCaption");

    const galleryDots =
        document.getElementById("projectGalleryDots");

    const previousButton =
        document.getElementById("projectGalleryPrev");

    const nextButton =
        document.getElementById("projectGalleryNext");

    const closeButton =
        document.getElementById("projectCaseClose");

    const titleElement =
        document.getElementById("projectCaseTitle");

    const periodElement =
        document.getElementById("projectCasePeriod");

    const categoryElement =
        document.getElementById("projectCaseCategory");

    const locationElement =
        document.getElementById("projectCaseLocation");

    const roleElement =
        document.getElementById("projectCaseRole");

    const descriptionElement =
        document.getElementById("projectCaseDescription");

    const highlightsElement =
        document.getElementById("projectCaseHighlights");

    const techElement =
        document.getElementById("projectCaseTech");

    const linksElement =
        document.getElementById("projectCaseLinks");

    if (
        !galleryImage ||
        !galleryEmpty ||
        !galleryCounter ||
        !galleryCaption ||
        !galleryDots ||
        !previousButton ||
        !nextButton ||
        !closeButton ||
        !titleElement ||
        !periodElement ||
        !categoryElement ||
        !locationElement ||
        !roleElement ||
        !descriptionElement ||
        !highlightsElement ||
        !techElement ||
        !linksElement
    ) {
        console.warn(
            "Sebagian elemen projectCaseStudyModal tidak ditemukan."
        );
        return;
    }

    let currentImages = [];
    let currentImageIndex = 0;
    let previousFocus = null;
    let imageRequest = 0;


    /* =====================================================
       DATA PROJECTS
    ===================================================== */

    const projectDetails = {
        projectModal1: {
            title: "KLASIFIKASI KUALITAS DAUN KEJI BELING",
            period: "2026",
            category: "Machine Learning",
            location: "Penelitian Skripsi",
            role: "KLASIFIKASI CITRA — SUPPORT VECTOR MACHINE",
            description:
                "Sistem klasifikasi kualitas daun Keji Beling berdasarkan ekstraksi ciri warna dan tekstur menggunakan metode Support Vector Machine (SVM). Sistem membedakan kondisi daun menjadi segar, layu, dan kering.",
            highlights: [
                "Melakukan prapemrosesan dan segmentasi citra daun.",
                "Mengekstraksi fitur warna pada ruang warna L*a*b*.",
                "Menghitung fitur tekstur menggunakan Gray-Level Co-occurrence Matrix (GLCM).",
                "Menggunakan Support Vector Machine dengan kernel RBF untuk klasifikasi tiga kelas.",
                "Membangun antarmuka web untuk mengunggah citra dan menampilkan hasil klasifikasi."
            ],
            tech: [
                "MATLAB", "SVM", "GLCM", "L*a*b*"
            ],
            gallery: [],
            links: []
        },

        projectModal2: {
            title: "VOTIFY",
            period: "2024",
            category: "Web Development",
            location: "Projek Kuliah",
            role: "Website Voting",
            description:
            "Votify merupakan proyek pengembangan website voting online yang dirancang untuk menyediakan proses pemungutan suara secara digital melalui antarmuka yang sederhana dan mudah digunakan.",
            highlights: [
                "Mengembangkan antarmuka website menggunakan HTML, CSS, dan JavaScript.",
                "Mengimplementasikan PHP untuk mendukung proses di sisi server.",
                "Merancang halaman utama, login, dan registrasi pengguna.",
                "Mengatur tata letak dan elemen visual untuk menciptakan pengalaman pengguna yang konsisten.."
            ],
            tech: [
                "HTML", "CSS", "JavaScript", "PHP", "Responsive Design"
            ],
            gallery: [],
            links: []
        },

        projectModal3: {
            title: "PENGELOLAAN DATA ADMINISTRASI BSU LORONG",
            period: "2024",
            category: "Web Development",
            location: "Projek Kuliah",
            role: "WEBISTE MANAGEMENT",
            description:
                "Proyek pengembangan website BSU Lorong yang dirancang untuk mendukung pengelolaan informasi dan administrasi bank sampah secara terstruktur. Website ini menjadi bagian dari upaya digitalisasi proses administrasi agar pengelolaan data lebih mudah dan efisien.",
            highlights: [
                "Merancang antarmuka website untuk kebutuhan administrasi BSU Lorong.",
                "Membuat halaman registrasi pengguna dengan input username, email, dan password.",
                "Menyusun struktur informasi agar data lebih terorganisasi dan mudah dikelola.",
                "Mendukung digitalisasi proses administrasi melalui sistem berbasis website."
            ],
            tech: ["HTML", "CSS", "PHP", "MySQL"],
            gallery: [],
            links: []
        },

        projectModal4: {
            title: "SOUNDTIFY",
            period: "2023",
            category: "UI/UX Design & Web Development",
            location: "Projek Kuliah",
            role: "Music Streaming",
            description:
                "Soundtify merupakan proyek perancangan platform streaming musik digital yang memungkinkan pengguna menjelajahi artis populer, menemukan rekomendasi lagu, dan mengakses koleksi musik melalui antarmuka yang intuitif dan menarik.",
            highlights: [
                "Merancang halaman beranda yang menampilkan artis populer dan pilihan lagu.",
                "Mengembangkan navigasi, kolom pencarian, dan tata letak konten musik.",
                "Memprioritaskan kemudahan akses dan kenyamanan pengguna saat menjelajahi konten."
            ],
            tech: ["Figma", "UI Design", "UX", "HTML", "CSS", "PHP", "MySQL"],
            gallery: [],
            links: []
        },

        projectModal5: {
            title: "KLASIFIKASI KUALITAS DAUN KEJI BELING",
            period: "2026",
            category: "Web Development · Digital Image Processing · Machine Learning",
            location: "Projek Mandiri",
            role: "WEB DEVELOPMENT & CITRA DIGITAL",
            description:
                "Website klasifikasi kualitas daun keji beling yang dikembangkan untuk mengidentifikasi kondisi daun berdasarkan citra digital menggunakan metode Support Vector Machine (SVM). Sistem ini memanfaatkan ekstraksi ciri warna dan tekstur untuk mengklasifikasikan daun ke dalam kategori segar, layu, dan kering.",
            highlights: [
                "Mengembangkan website klasifikasi citra menggunakan HTML, CSS, dan JavaScript.",
                "Menerapkan ekstraksi ciri warna menggunakan ruang warna L*a*b*.",
                "Mengimplementasikan metode Support Vector Machine (SVM) untuk klasifikasi tiga kategori kualitas daun.",
                "Menampilkan hasil prediksi dan fitur citra melalui antarmuka website."
            ],
            tech: ["HTML", "CSS", "Database", "MATLAB", "SVM", "GLCM", "L*a*b*"],
            gallery: [],
            links: []
        },

        projectModal6: {
            title: "CELENGAN",
            period: "2026",
            category: "Web Development",
            location: "Projek Mandiri",
            role: "",
            description:
                "Celengan merupakan proyek pengembangan website untuk membantu pengguna mengelola keuangan pribadi secara terstruktur. Website ini dirancang untuk memantau pemasukan, pengeluaran, anggaran bulanan, dan target tabungan melalui dashboard yang informatif dan mudah digunakan.",
            highlights: [
                "Merancang dashboard untuk menampilkan ringkasan saldo, pemasukan, pengeluaran, dan kondisi anggaran.",
                "Mengembangkan fitur pencatatan dan pemantauan transaksi keuangan.",
                "Menyediakan pengelolaan anggaran bulanan dan target tabungan.",
                "Menampilkan ringkasan pengeluaran dan progres keuangan melalui visualisasi data."
            ],
            tech: ["HTML", "CSS", "JavaScript"],
            gallery: [],
            links: []
        },

        projectModal7: {
            title: "IMAGETOR",
            period: "2026",
            category: "Website",
            location: "Projek Mandiri",
            role: "Editor Foto",
            description:
                "Memiliki layanan edit foto otomatis seperti resize, pertajam, dan hapus latar belakang",
            highlights: [
                "Resize : Pengguna bisa mengatur gambar sesuai kebutuhan seperti mengatur lebar dan tinggi atau pengguna bisa memilih ukuran yang telah disediakan.",
                "Sharpen : fitur untuk meningkatkan detail pada gambar",
                "Background : pengguna bisa menghapus latar belakang secara otomatis atau mengganti latar dengan latar putih, hitam, dan transparan.",
            ],
            tech: [],
            gallery: [],
            links: []
        },

        projectModal8: {
            title: "Ruang Tumbuh",
            period: "2026",
            category: "Website",
            location: "Projek Mandiri",
            role: "Website Belajar",
            description:
                "Menyediakan konsep website belajar dengan berbagai fitur seperti mencacat daftar tugas, jadwal belajar, dan lainnya",
            highlights: [
                "Daftar Tugas : untuk menambah tugas dan juga bisa memilih tugas mana saja yang menjadi prioritas utama sehingga pengguna bisa mengatur waktu belajarnya sebaik mungkin",
                "Ruang Fokus : menu yang menyajikan waktu fokus sehingga pengguna bisa mengetahui berapa lama fokus terhadap tugasnya",
                "Jadwal Belajar : pengguna bisa menambahkan waktu istirahat dan belajar pada fitur ini",
                "Catatan : Fitur ini bisa digunakan pengguna untuk menambahkan catatan yang mungkin saja bisa terlupakan diproses belajar" 
            ],
            tech: [],
            gallery: [],
            links: []
        },

        
projectModal9: {
    title: "Dashboard Analisis Penjualan Aetherbrew Cafe",
    period: "2026",
    category: "Microsoft Excel",
    location: "Proyek Mandiri / Akademik",
    role: "Dashboard Analisis",

    description:
        "Dashboard interaktif berbasis Microsoft Excel untuk menganalisis kinerja penjualan Aetherbrew Cafe. Proyek ini menyajikan informasi penjualan melalui visualisasi data, mulai dari kategori menu, jenis pembeli, menu terlaris, hingga tren pendapatan bulanan untuk membantu memahami performa bisnis dan mendukung pengambilan keputusan.",
    highlights: [
        "Menyusun dan mengolah data transaksi penjualan menggunakan Microsoft Excel.",
        "Membuat KPI untuk menampilkan total pendapatan, jumlah transaksi, dan ringkasan performa penjualan.",
        "Menggunakan PivotTable dan PivotChart untuk menganalisis kategori menu, jenis pembeli, serta menu terlaris.",
        "Menyajikan tren pendapatan bulanan melalui grafik dan visualisasi data interaktif.",
        "Merancang dashboard yang informatif agar data penjualan lebih mudah dipahami."
    ],

    tech: [
        "Microsoft Excel",
        "PivotTable",
        "PivotChart",
        "Data Visualization"
    ],
    gallery: [],
    links: []
},

projectModal10: {
    title: "Dashboard Analisis Penjualan Sales ",
    period: "2026",
    category: "Microsoft Excel",
    location: "Proyek Mandiri",
    role: "Microsoft Excel Dashboard",

    description:
        "Dashboard interaktif berbasis Microsoft Excel yang dirancang untuk menganalisis kinerja penjualan dan transaksi bisnis. Dashboard ini menyajikan informasi dalam bentuk KPI, grafik, dan visualisasi data untuk membantu memantau total penjualan, jumlah transaksi, unit terjual, kontribusi kategori produk, performa cabang, penjualan per sales, serta metode pembayaran. Fitur filter interaktif memungkinkan pengguna mengeksplorasi data berdasarkan cabang, kategori, sales, dan periode waktu.",
    highlights: [
        "Menyajikan indikator kinerja utama (KPI) untuk merangkum performa penjualan.",
        "Menganalisis kontribusi penjualan berdasarkan kategori produk, seperti alat tulis, elektronik kantor, dan furnitur..",
        "Membandingkan performa penjualan antar cabang dan tenaga penjualan (sales).",
        "Memvisualisasikan distribusi metode pembayaran, termasuk Cash, Debit, QRIS, dan Transfer.",
        "Menggunakan grafik dan PivotChart untuk menyajikan informasi penjualan secara visual.",
        "Menambahkan filter interaktif untuk mengeksplorasi data berdasarkan cabang, kategori, sales, dan tanggal."
    ],

    tech: [
        "Microsoft Excel",
        "PivotTable",
        "PivotChart",
        "Data Visualization"
    ],

    gallery: [],
    links: []
},



        /* =================================================
           DATA CERTIFICATES
           Gunakan data-modal certificateModal1 sampai 6
        ================================================= */

        certificateModal1: {
            title: "Microsoft Certified: Azure Data Fundamentals",
            period: "2025",
            category: "SERTIFIKAT",
            location: "Makassar",
            role: "MICROSOFT AZURE DATA FUNDAMENTALS",
            description:
                "Microsoft Certified: Azure Data Fundamentals, yang mencakup pembelajaran dasar mengenai konsep-konsep terkait data di Azure.",
            highlights: [
                "Memahami konsep dasar data, termasuk data relasional dan nonrelasional.",
                "Mengenal konsep dasar analitik data serta layanan data di Microsoft Azure.",
                "Penerbit sertifikat: Microsoft.",
                "Tahun penerbitan: November 2025."
                
            ],
            tech: [],
            gallery: [],
            links: []
        },

        certificateModal2: {
            title: "Dasar Microsft Excel",
            period: "2026",
            category: "Sertifikat",
            role: "MICROSOFT EXCEL",
            description:
                "Sertifikat Penghargaan atas penyelesaian program Microsoft Excel yang diselenggarakan oleh Remote Skills Academy.",
            highlights: [
                "Nama program: Dasaar Microsoft Excel",
                "Penyelenggara: Remote Skills Academy",
                "Tahun penerbitan: 2026"
            ],
            tech: ["Srting & Table Style", "Find & Replace", "Word Count", "Spell & check"],
            gallery: [],
            links: []
        },

        certificateModal3: {
            title: "PT PLN (PERSERO) UID SULSELARABAR",
            period: "2024",
            category: "SERTIFIKAT",
            location: "Makassar",
            role: "Divisi Komukasi dan Tjsl",
            description:
                "Sertifikat magang di PT PLN UID SULSELRABAR untuk divisi komunikasi dan TJSL.",
            highlights: [
                "Nama program: Magang Mandiri",
                "Penyelenggara: PT PLN (Persero) UID SULSELRABAR",
                "Tahun penerbitan: 11 Juni - 11 Juli 2026."
            ],
            tech: ["Rekapitulasi", "Dokumentasi Kegiatan", "Input Data", "Sorting Berita", "Kelola Sosmed"],
            gallery: [],
            links: []
        },

        certificateModal4: {
            title: "KURSUS & PELATIHAN MICROSOFT EXCEL",
            period: "2026",
            category: "Sertifikat",
            location: "PT PTC INDONESIA",
            role: "MICROSOFT EXCEL",
            description:
                "Sertifikat Kursus dan Pelatihan Microsoft Excel yang diselenggarakan oleh PT PTC Indonesia di bawah naungan Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker). Pelatihan ini bertujuan meningkatkan keterampilan dalam menggunakan Microsoft Excel untuk pengolahan data, penerapan rumus dan fungsi, serta analisis data secara efektif dan terstruktur.",
            highlights: [
                "Mengikuti kursus Microsoft Excel yang diselenggarakan oleh PT PTC Indonesia.",
                "Mempelajari penggunaan fungsi dan rumus Excel untuk pengolahan serta perhitungan data.",
                "Mengembangkan keterampilan dalam mengelola dan menganalisis data menggunakan Microsoft Excel.",
                "Menerapkan Microsoft Excel untuk mendukung penyajian informasi dan kebutuhan analisis data."
            ],
            tech: ["Microsoft Excel", "Data Processing", "Data Analysis"],
            gallery: [],
            links: []
        },

        certificateModal5: {
            title: "Dasar Microsoft Word",
            period: "2026",
            category: "Sertifikat",
            role: "Microsoft Word",
            description:
                "Sertifikat Penghargaan atas penyelesaian program Microsoft Word Dasar yang diselenggarakan oleh Remote Skills Academy.",
            highlights: [
                "Nama Program: Microsoft Word",
                "Penyelenggara: Remote Skills Academy",
                "Tahun penerbitan: 2026."
            ],
            tech: ["Rumus Dasar", "Study Case"],
            gallery: [],
            links: []
        },

        certificateModal6: {
            title: "PROFESSIONAL DEVELOPMENT",
            period: "2025",
            category: "Certificate",
            location: "Sesuaikan dengan penerbit sertifikat",
            role: "PROFESSIONAL DEVELOPMENT",
            description:
                "Sertifikat kegiatan pengembangan kemampuan profesional. Sesuaikan dengan informasi pada dokumen asli.",
            highlights: [
                "Nama kegiatan: sesuaikan dengan sertifikat.",
                "Penyelenggara: sesuaikan dengan sertifikat.",
                "Tahun penerbitan: 2025."
            ],
            tech: ["Professional Development"],
            gallery: [],
            links: []
        }
    };


    /* =====================================================
       AMBIL GAMBAR DARI KARTU PROJECT ATAU CERTIFICATE
    ===================================================== */

    function getCardImage(button) {
        const card = button.closest([
            ".showcase-project-card",
            ".certificate-card",
            ".showcase-certificate-card",
            ".certificate-item",
            ".certificate"
        ].join(", "));

        if (!card) return null;

        const mainImage = card.querySelector([
            ".showcase-project-image img",
            ".certificate-image img",
            ".certificate-preview img",
            ".certificate-card-image img",
            ".certificate-media img",
            "img"
        ].join(", "));

        const additionalImages = (
            card.dataset.gallery || ""
        )
            .split("|")
            .map((path) => path.trim())
            .filter(Boolean);

        const images = [];

        if (mainImage && mainImage.getAttribute("src")) {
            images.push({
                src: mainImage.getAttribute("src"),
                alt: mainImage.alt || "Preview sertifikat atau proyek"
            });
        }

        additionalImages.forEach((src) => {
            if (!images.some((image) => image.src === src)) {
                images.push({
                    src,
                    alt: "Gambar tambahan"
                });
            }
        });

        return images;
    }


    /* =====================================================
       RENDER GALERI
    ===================================================== */

    function renderGalleryDots() {
        galleryDots.replaceChildren();

        currentImages.forEach((image, index) => {
            const dot = document.createElement("button");

            dot.type = "button";
            dot.className = "project-gallery-dot";

            dot.classList.toggle(
                "active",
                index === currentImageIndex
            );

            dot.setAttribute(
                "aria-label",
                `Lihat gambar ${index + 1}`
            );

            dot.addEventListener("click", () => {
                showGalleryImage(index);
            });

            galleryDots.appendChild(dot);
        });
    }


    function showGalleryImage(index) {
        if (!currentImages.length) {
            galleryImage.removeAttribute("src");
            galleryImage.classList.remove("is-loaded");
            galleryImage.hidden = true;

            galleryEmpty.classList.add("is-visible");
            galleryCounter.textContent = "0 / 0";
            galleryCaption.textContent = "Preview tidak tersedia";

            previousButton.disabled = true;
            nextButton.disabled = true;

            galleryDots.replaceChildren();

            return;
        }

        currentImageIndex =
            (index + currentImages.length) % currentImages.length;

        const imageData = currentImages[currentImageIndex];
        const requestId = ++imageRequest;

        galleryImage.classList.remove("is-loaded");
        galleryImage.hidden = false;

        galleryEmpty.classList.remove("is-visible");

        galleryCounter.textContent =
            `${currentImageIndex + 1} / ${currentImages.length}`;

        galleryCaption.textContent = imageData.alt;

        const preload = new Image();

        preload.onload = () => {
            if (requestId !== imageRequest) return;

            galleryImage.src = imageData.src;
            galleryImage.alt = imageData.alt;
            galleryImage.classList.add("is-loaded");

            galleryEmpty.classList.remove("is-visible");
        };

        preload.onerror = () => {
            if (requestId !== imageRequest) return;

            galleryImage.removeAttribute("src");
            galleryImage.classList.remove("is-loaded");

            galleryEmpty.classList.add("is-visible");
        };

        preload.src = imageData.src;

        previousButton.disabled = currentImages.length <= 1;
        nextButton.disabled = currentImages.length <= 1;

        renderGalleryDots();
    }


    /* =====================================================
       RENDER DETAIL MODAL
    ===================================================== */

    function renderList(container, items) {
        container.replaceChildren();

        items.forEach((item) => {
            const li = document.createElement("li");

            li.textContent = item;
            container.appendChild(li);
        });
    }


    function renderTech(items) {
        techElement.replaceChildren();

        items.forEach((item) => {
            const tag = document.createElement("span");

            tag.textContent = item;
            techElement.appendChild(tag);
        });
    }


    function renderLinks(items) {
        linksElement.replaceChildren();

        items.forEach((item) => {
            const link = document.createElement("a");

            link.className = "project-case-link";
            link.href = item.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = item.label + " ↗";

            linksElement.appendChild(link);
        });
    }


    /* =====================================================
       OPEN PROJECT / CERTIFICATE DETAIL
    ===================================================== */

    function openProject(button) {
        const modalKey = button.dataset.modal;
        const details = projectDetails[modalKey];

        if (!details) {
            console.warn(
                "Detail proyek atau sertifikat tidak ditemukan:",
                modalKey
            );

            return;
        }

        previousFocus = button;

        titleElement.textContent = details.title;
        periodElement.textContent = details.period;
        categoryElement.textContent = details.category;
        locationElement.textContent = details.location;
        roleElement.textContent = details.role;
        descriptionElement.textContent = details.description;

        renderList(highlightsElement, details.highlights);
        renderTech(details.tech);
        renderLinks(details.links);

        currentImages = [
            ...(details.gallery || []).map((src) => ({
                src,
                alt: details.title
            })),
            ...(getCardImage(button) || [])
        ].filter(
            (image, index, array) =>
                array.findIndex(
                    (item) => item.src === image.src
                ) === index
        );

        currentImageIndex = 0;

        showGalleryImage(0);

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("project-modal-open");

        closeButton.focus();
    }


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeProject() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("project-modal-open");

        if (previousFocus && document.contains(previousFocus)) {
            previousFocus.focus();
        }
    }


    /* =====================================================
       EVENT TOMBOL PROJECT DAN CERTIFICATE
    ===================================================== */

    document.addEventListener("click", (event) => {
        const button = event.target.closest([
            ".showcase-case-link[data-modal]",
            ".certificate-detail-button[data-modal]",
            ".certificate-card [data-modal]",
            ".showcase-certificate-card [data-modal]",
            ".certificate-item [data-modal]",
            ".certificate [data-modal]"
        ].join(", "));

        if (!button) return;

        event.preventDefault();

        openProject(button);
    });


    /* =====================================================
       NAVIGASI GALERI MODAL
    ===================================================== */

    closeButton.addEventListener("click", closeProject);

    previousButton.addEventListener("click", () => {
        showGalleryImage(currentImageIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showGalleryImage(currentImageIndex + 1);
    });


    /* =====================================================
       TUTUP MODAL DENGAN BACKDROP
    ===================================================== */

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeProject();
        }
    });


    /* =====================================================
       KEYBOARD MODAL
    ===================================================== */

    document.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("is-open")) return;

        if (event.key === "Escape") {
            closeProject();
        }

        if (event.key === "ArrowLeft") {
            showGalleryImage(currentImageIndex - 1);
        }

        if (event.key === "ArrowRight") {
            showGalleryImage(currentImageIndex + 1);
        }
    });
});


// =====================================================
// CONTACT FORM — WHATSAPP FIX
// =====================================================

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("portfolioContactForm");
    const contactStatus = document.getElementById("portfolioContactStatus");

    if (!contactForm) {
        console.error("Form kontak tidak ditemukan.");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("contactName");
        const messageInput = document.getElementById("contactMessage");

        if (!nameInput || !messageInput) {
            console.error("Kolom nama atau pesan tidak ditemukan.");
            if (contactStatus) {
                contactStatus.textContent =
                    "Formulir bermasalah. Silakan periksa kembali HTML.";
            }
            return;
        }

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !message) {
            if (contactStatus) {
                contactStatus.textContent =
                    "Mohon isi nama lengkap dan pesan terlebih dahulu.";
            }
            return;
        }

        // Nomor WhatsApp tujuan, tanpa tanda + atau spasi
        const phoneNumber = "6282122062572";

        const whatsappMessage =
            "Halo Rahma Alia!\n\n" +
            "Nama: " + name + "\n\n" +
            "Pesan:\n" + message;

        const whatsappURL =
            "https://wa.me/" + phoneNumber +
            "?text=" + encodeURIComponent(whatsappMessage);

        if (contactStatus) {
            contactStatus.textContent =
                "Membuka WhatsApp...";
        }

        // Buka WhatsApp dengan pesan yang sudah diisi
        window.location.href = whatsappURL;
    });
});

/* =====================================================
   TOMBOL ATAS — TAMPIL SAAT HALAMAN DIGULIR
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const topButton = document.querySelector(
        ".contact-portfolio-top"
    );

    if (!topButton) return;

    function updateTopButton() {
        if (window.innerWidth <= 768) {
            topButton.classList.toggle(
                "is-visible",
                window.scrollY > 300
            );
        } else {
            topButton.classList.add("is-visible");
        }
    }

    window.addEventListener("scroll", updateTopButton, {
        passive: true
    });

    window.addEventListener("resize", updateTopButton);

    updateTopButton();
});

/* =====================================================
   TOMBOL ATAS — GLOBAL FIX
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const topButton = document.getElementById("contactPortfolioTop");

    if (!topButton) return;

    // Pindahkan tombol keluar dari section kontak
    document.body.appendChild(topButton);

    // Tampilkan tombol setelah halaman digulir
    function updateTopButton() {
        topButton.classList.toggle(
            "is-visible",
            window.scrollY > 300
        );
    }

    // Kembali ke bagian Home
    topButton.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", updateTopButton, {
        passive: true
    });

    updateTopButton();
});


/* ==========================================
   TOMBOL UNDUH PROJECT 09 & PROJECT 10
   FIX: MENCEGAH BROWSER NGELAG
========================================== */

(() => {
    "use strict";

    const projectDownloads = {
        projectModal9: {
            url: "assets/Dashboard Sales.xlsx",
            className: "project-download-09"
        },

        projectModal10: {
            url: "assets/Dashboard Cafee.xlsx",
            className: "project-download-10"
        }
    };

    const modal = document.getElementById("projectCaseStudyModal");
    const gallery = modal?.querySelector(".project-case-gallery");
    const closeButton = document.getElementById("projectCaseClose");

    if (!modal || !gallery) {
        console.warn(
            "Modal studi kasus atau galeri proyek tidak ditemukan."
        );
        return;
    }

    let activeProjectId = null;

    /*
     * MEMBUAT ATAU MEMPERBARUI TOMBOL UNDUH
     */
    function setupDownloadButton(projectId) {
        const config = projectDownloads[projectId];

        if (!config) {
            removeDownloadButton();
            return;
        }

        let button = gallery.querySelector(
            ".project-download-09, .project-download-10"
        );

        // Buat tombol hanya jika belum tersedia.
        if (!button) {
            button = document.createElement("a");

            button.innerHTML = `
                <i class="fas fa-download" aria-hidden="true"></i>
                <span>Unduh Projek</span>
            `;

            button.setAttribute("download", "");
            button.setAttribute("rel", "noopener");
        }

        // Pengaturan tombol mengikuti proyek yang sedang dibuka.
        button.className = config.className;
        button.href = config.url;
        button.style.display = "inline-flex";
        button.style.alignItems = "center";
        button.style.justifyContent = "center";
        button.style.gap = "10px";
        button.style.textDecoration = "none";

        button.setAttribute(
            "aria-label",
            projectId === "projectModal9"
                ? "Unduh proyek 09 Dashboard Aetherbrew Cafe"
                : "Unduh proyek 10 Dashboard Analisis Penjualan Sales"
        );

        // Pindahkan tombol hanya jika belum berada di posisi yang benar.
        const controls = gallery.querySelector(
            ".project-gallery-controls"
        );

        if (controls && controls.nextElementSibling !== button) {
            controls.insertAdjacentElement("afterend", button);
        } else if (!controls && !gallery.contains(button)) {
            gallery.appendChild(button);
        }
    }

    /*
     * MENGHAPUS TOMBOL UNDUH
     */
    function removeDownloadButton() {
        gallery.querySelectorAll(
            ".project-download-09, .project-download-10"
        ).forEach((button) => button.remove());

        activeProjectId = null;
    }

    /*
     * MENGENALI PROYEK YANG DIKLIK
     *
     * Tidak menggunakan MutationObserver.
     */
    document.addEventListener("click", (event) => {
        const target = event.target;

        if (!(target instanceof Element)) return;

        const trigger = target.closest("[data-modal]");

        if (!trigger) return;

        const projectId = trigger.getAttribute("data-modal");

        if (projectDownloads[projectId]) {
            activeProjectId = projectId;

            /*
             * Tunggu sampai handler utama selesai membuka modal.
             * Setelah itu, tampilkan tombol unduh proyek yang sesuai.
             */
            requestAnimationFrame(() => {
                if (
                    activeProjectId !== projectId ||
                    !modal.classList.contains("is-open")
                ) {
                    return;
                }

                setupDownloadButton(projectId);
            });
        } else {
            removeDownloadButton();
        }
    });

    /*
     * HAPUS TOMBOL SAAT MODAL DITUTUP
     */
    closeButton?.addEventListener("click", () => {
        removeDownloadButton();
    });

    /*
     * HAPUS TOMBOL JIKA MODAL DITUTUP MELALUI BACKDROP
     */
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            removeDownloadButton();
        }
    });

    /*
     * HAPUS TOMBOL JIKA MODAL DITUTUP DENGAN ESCAPE
     */
    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            modal.classList.contains("is-open")
        ) {
            removeDownloadButton();
        }
    });
})();


/* =====================================
   NAVIGASI TOMBOL LIHAT PROYEK
===================================== */

document.addEventListener("DOMContentLoaded", function () {
    const tombolProyek = document.querySelector("#lihatProyekBtn");

    if (!tombolProyek) {
        console.warn('Tombol "Lihat Proyek" tidak ditemukan.');
        return;
    }

    tombolProyek.addEventListener("click", function (event) {
        const bagianProyek = document.getElementById("proyek");

        if (!bagianProyek) {
            console.error('Bagian dengan ID "proyek" tidak ditemukan.');
            return;
        }

        event.preventDefault();

        bagianProyek.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        history.replaceState(null, "", "#proyek");
    });
});
