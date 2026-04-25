// ============================================
// PROFESSIONAL CV - JavaScript Controller
// Dark Mode & Language Toggle with LocalStorage
// Fixed Action Buttons & PDF Download
// ============================================

// Translation Dictionary
const translations = {
    ar: {
        headerTitle: 'السيرة الذاتية الاحترافية',
        contactTitle: 'معلومات الاتصال',
        phoneLabel: 'الهاتف',
        emailLabel: 'البريد الإلكتروني',
        locationLabel: 'الموقع',
        locationValue: 'المملكة العربية السعودية',
        languagesTitle: 'اللغات',
        arabicLang: 'العربية',
        englishLang: 'الإنجليزية',
        skillsTitle: 'المهارات التقنية',
        surveyingTag: 'Surveying',
        pmTag: 'Project Management',
        ssTag: 'Site Supervision',
        trTag: 'Technical Reports',
        officeTitle: 'حزمة الأوفيس',
        certTitle: 'الشهادات',
        certName: 'مهندس مساحة معتمد',
        certDetail: 'متخصص في أجهزة Leica والمسح الجيوديسي',
        interestsTitle: 'الاهتمامات',
        interest1: '🌍 السفر والاستكشاف',
        interest2: '📚 القراءة والتطوير المهني',
        interest3: '💻 التقنيات الحديثة',
        summaryTitle: 'الملخص المهني',
        summaryContent: 'مهندس مساحة محترف وذو خبرة عملية متقدمة في مجال المسح الجيوديسي والتطبيقات الهندسية. متخصص في إدارة وتنفيذ مشاريع المسح والرفع المساحي للمشاريع الإنشائية والصناعية الكبرى. أمتلك خبرة عملية متقدمة في استخدام أحدث الأجهزة المساحية (Leica Total Station، GPS/GNSS) وبرامج التصميم الهندسي (Civil 3D، AutoCAD). قادر على ضمان دقة عالية في التنفيذ وضبط الجودة في الموقع، مع القدرة على العمل ضمن فريق متعدد التخصصات وإدارة المشاريع بكفاءة عالية.',
        experienceTitle: 'الخبرات العملية',
        expTitle1: 'مهندس مساحة',
        expDate1: '2019 - الحالي',
        expCompany1: 'المشاريع الإنشائية والصناعية',
        expDetail1: 'تنفيذ أعمال الرفع والمسح المساحي للمشاريع الصناعية الكبرى والمصانع والمستودعات بدقة عالية جداً',
        expDetail2: 'معالجة البيانات الميدانية باستخدام برنامج Autodesk Civil 3D و AutoCAD لإصدار المخططات النهائية',
        expDetail3: 'حساب كميات الحفر والردم والمقاسات الهندسية بدقة عالية',
        expDetail4: 'إعداد التقارير المساحية الدورية والفنية بشكل احترافي',
        expDetail5: 'التنسيق الفعال مع مديري المشاريع والفرق الميدانية لضمان سير العمل وفق الجدول الزمني',
        expDetail6: 'الإشراف على جودة التنفيذ وضبط الانحرافات والأخطاء في الموقع',
        expTitle2: 'مهام متخصصة',
        expDate2: 'مستمر',
        expCompany2: 'المسح الجيوديسي والتطبيقات الهندسية',
        expDetail7: 'استخدام متقدم لأجهزة Leica Total Station في المسح الدقيق',
        expDetail8: 'تطبيق تقنيات GPS/GNSS المتقدمة (GPS E800) للمشاريع الكبرى',
        expDetail9: 'استخدام أجهزة الميزان البصري (Leveling) لقياسات الارتفاعات',
        expDetail10: 'معالجة البيانات الجيوديسية وتحويلها إلى مخططات هندسية دقيقة',
        educationTitle: 'المؤهلات العلمية',
        eduDegree: 'بكالوريوس الهندسة المساحية',
        eduDate: '2017 - 2019',
        eduUniversity: 'جامعة صنعاء - كلية الهندسة',
        eduSpec: 'Surveying Engineering | هندسة المساحة',
        competenciesTitle: 'المهارات الأساسية',
        comp1Title: 'المسح الجيوديسي',
        comp1Desc: 'إتقان تام للمسح الجيوديسي والتطبيقات الهندسية المتقدمة',
        comp2Title: 'أجهزة المسح',
        comp2Desc: 'خبرة عملية متقدمة في استخدام Leica Total Station و GPS/GNSS',
        comp3Title: 'البرامج الهندسية',
        comp3Desc: 'إتقان Civil 3D و AutoCAD والبرامج الهندسية المتقدمة',
        comp4Title: 'إدارة المشاريع',
        comp4Desc: 'إدارة فعالة للمشاريع الكبرى والفرق الميدانية',
        comp5Title: 'التقارير الفنية',
        comp5Desc: 'إعداد تقارير فنية احترافية وتفصيلية',
        comp6Title: 'ضبط الجودة',
        comp6Desc: 'ضمان دقة عالية وضبط جودة في جميع المشاريع',
        additionalTitle: 'معلومات إضافية',
        refTitle: 'المراجع المهنية',
        refDesc: 'متاحة عند الطلب من الشركات والعملاء السابقين',
        licenseTitle: 'الرخص والتصاريح',
        licenseDesc: 'رخصة مهندس مساحة معتمد - جاهز للعمل الفوري',
        footerText: '&copy; 2026 NJM ALDEEN. All rights reserved. | Professional Surveying Engineer',
        titleAr: 'مهندس مساحة محترف',
        titleEn: 'Professional Surveying Engineer',
        whatsappLabel: 'واتساب',
        downloadLabel: 'تحميل'
    },
    en: {
        headerTitle: 'Professional CV',
        contactTitle: 'Contact Information',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        locationLabel: 'Location',
        locationValue: 'Saudi Arabia',
        languagesTitle: 'Languages',
        arabicLang: 'Arabic',
        englishLang: 'English',
        skillsTitle: 'Technical Skills',
        surveyingTag: 'Surveying',
        pmTag: 'Project Management',
        ssTag: 'Site Supervision',
        trTag: 'Technical Reports',
        officeTitle: 'Office Suite',
        certTitle: 'Certifications',
        certName: 'Certified Surveying Engineer',
        certDetail: 'Specialist in Leica Instruments and Geodetic Surveying',
        interestsTitle: 'Interests',
        interest1: '🌍 Travel and Exploration',
        interest2: '📚 Reading and Professional Development',
        interest3: '💻 Modern Technologies',
        summaryTitle: 'Professional Summary',
        summaryContent: 'Professional surveying engineer with advanced practical experience in geodetic surveying and engineering applications. Specialized in managing and executing surveying projects for large-scale construction and industrial projects. Proficient in using advanced surveying equipment (Leica Total Station, GPS/GNSS) and engineering design software (Civil 3D, AutoCAD). Capable of ensuring high accuracy in execution and quality control on site, with the ability to work within multidisciplinary teams and manage projects efficiently.',
        experienceTitle: 'Professional Experience',
        expTitle1: 'Surveying Engineer',
        expDate1: '2019 - Present',
        expCompany1: 'Construction and Industrial Projects',
        expDetail1: 'Executing surveying and leveling works for large-scale industrial projects, factories, and warehouses with high precision',
        expDetail2: 'Processing field data using Autodesk Civil 3D and AutoCAD software to produce final plans',
        expDetail3: 'Calculating excavation and fill quantities and engineering measurements with high accuracy',
        expDetail4: 'Preparing periodic and technical surveying reports professionally',
        expDetail5: 'Effective coordination with project managers and field teams to ensure work progress according to schedule',
        expDetail6: 'Supervising execution quality and correcting deviations and errors on site',
        expTitle2: 'Specialized Tasks',
        expDate2: 'Ongoing',
        expCompany2: 'Geodetic Surveying and Engineering Applications',
        expDetail7: 'Advanced use of Leica Total Station equipment in precise surveying',
        expDetail8: 'Applying advanced GPS/GNSS techniques (GPS E800) for large-scale projects',
        expDetail9: 'Using optical leveling equipment for height measurements',
        expDetail10: 'Processing geodetic data and converting it into precise engineering plans',
        educationTitle: 'Educational Qualifications',
        eduDegree: 'Bachelor of Surveying Engineering',
        eduDate: '2017 - 2019',
        eduUniversity: 'Sanaa University - Faculty of Engineering',
        eduSpec: 'Surveying Engineering | هندسة المساحة',
        competenciesTitle: 'Core Competencies',
        comp1Title: 'Geodetic Surveying',
        comp1Desc: 'Complete mastery of geodetic surveying and advanced engineering applications',
        comp2Title: 'Surveying Equipment',
        comp2Desc: 'Advanced practical experience in using Leica Total Station and GPS/GNSS',
        comp3Title: 'Engineering Software',
        comp3Desc: 'Proficiency in Civil 3D, AutoCAD, and advanced engineering software',
        comp4Title: 'Project Management',
        comp4Desc: 'Effective management of large-scale projects and field teams',
        comp5Title: 'Technical Reports',
        comp5Desc: 'Preparation of professional and detailed technical reports',
        comp6Title: 'Quality Control',
        comp6Desc: 'Ensuring high accuracy and quality control in all projects',
        additionalTitle: 'Additional Information',
        refTitle: 'Professional References',
        refDesc: 'Available upon request from previous companies and clients',
        licenseTitle: 'Licenses and Permits',
        licenseDesc: 'Certified Surveying Engineer License - Ready for Immediate Work',
        footerText: '&copy; 2026 NJM ALDEEN. All rights reserved. | Professional Surveying Engineer',
        titleAr: 'Professional Surveying Engineer',
        titleEn: 'Professional Surveying Engineer',
        whatsappLabel: 'WhatsApp',
        downloadLabel: 'Download'
    }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'ar';

    // Apply saved preferences
    applyTheme(savedTheme);
    applyLanguage(savedLanguage);

    // Setup event listeners
    setupEventListeners();

    // Initialize PDF download functionality
    initializePDFDownload();
}

// ============================================
// THEME TOGGLE
// ============================================

function setupEventListeners() {
    const themeToggle = document.getElementById('themeToggle');
    const languageToggle = document.getElementById('languageToggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
}

function toggleTheme() {
    const body = document.getElementById('bodyElement');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
}

function applyTheme(theme) {
    const body = document.getElementById('bodyElement');

    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// ============================================
// LANGUAGE TOGGLE
// ============================================

function toggleLanguage() {
    const currentLanguage = localStorage.getItem('language') || 'ar';
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';

    applyLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
}

function applyLanguage(language) {
    const html = document.getElementById('htmlElement');
    const langText = document.getElementById('langText');

    // Update HTML direction and language
    if (language === 'ar') {
        html.lang = 'ar';
        html.dir = 'rtl';
        if (langText) langText.textContent = 'EN';
    } else {
        html.lang = 'en';
        html.dir = 'ltr';
        if (langText) langText.textContent = 'AR';
    }

    // Update all translatable elements
    updateTranslations(language);
}

function updateTranslations(language) {
    const trans = translations[language];

    // Update all elements with translation keys
    for (const [key, value] of Object.entries(trans)) {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'P' || element.tagName === 'SPAN') {
                element.textContent = value;
            } else {
                element.innerHTML = value;
            }
        }
    }
}

// ============================================
// PDF DOWNLOAD FUNCTIONALITY
// ============================================

function initializePDFDownload() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generateAndDownloadPDF();
        });
    }
}

function generateAndDownloadPDF() {
    // Check if html2pdf library is available
    if (typeof html2pdf === 'undefined') {
        // Load html2pdf library dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.onload = function() {
            createPDF();
        };
        document.head.appendChild(script);
    } else {
        createPDF();
    }
}

function createPDF() {
    const element = document.querySelector('.container');
    const opt = {
        margin: 10,
        filename: 'NJM_ALDEEN_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };

    html2pdf().set(opt).from(element).save();
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + D: Download PDF
    if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        generateAndDownloadPDF();
    }

    // Ctrl/Cmd + T: Toggle Theme
    if ((event.ctrlKey || event.metaKey) && event.key === 't') {
        event.preventDefault();
        toggleTheme();
    }

    // Ctrl/Cmd + L: Toggle Language
    if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
        event.preventDefault();
        toggleLanguage();
    }
});

// ============================================
// SMOOTH SCROLL FOR ANCHORS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// ANALYTICS & TRACKING (Optional)
// ============================================

// Track page views
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
}

// Track button clicks
function trackButtonClick(buttonName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'button_click', {
            button_name: buttonName
        });
    }
}

// Add tracking to fixed buttons
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            trackButtonClick('whatsapp');
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            trackButtonClick('download_cv');
        });
    }
});

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Add focus management
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// ============================================
// EXPORT FUNCTIONS
// ============================================

// Export CV as JSON
function exportCVAsJSON() {
    const cvData = {
        name: 'NJM ALDEEN',
        title: 'Professional Surveying Engineer',
        contact: {
            phone: '+966 50 840 6107',
            email: 'Njm777534@gmail.com',
            location: 'Saudi Arabia'
        },
        exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(cvData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NJM_ALDEEN_CV.json';
    link.click();
}

// ============================================
// PRINT OPTIMIZATION
// ============================================

window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});

// ============================================
// CONSOLE MESSAGES
// ============================================

console.log('%c🎯 NJM ALDEEN - Professional Surveying Engineer', 'font-size: 16px; color: #1e3a8a; font-weight: bold;');
console.log('%cWelcome to my professional CV website!', 'font-size: 12px; color: #3b82f6;');
console.log('%cKeyboard Shortcuts:', 'font-size: 12px; color: #0ea5e9; font-weight: bold;');
console.log('%cCtrl/Cmd + D: Download PDF', 'font-size: 11px; color: #64748b;');
console.log('%cCtrl/Cmd + T: Toggle Theme', 'font-size: 11px; color: #64748b;');
console.log('%cCtrl/Cmd + L: Toggle Language', 'font-size: 11px; color: #64748b;');
