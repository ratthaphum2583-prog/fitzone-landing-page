const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const menuLinks = document.querySelectorAll(".navbar-menu a");
const languageButtons = document.querySelectorAll("[data-lang]");
const savedLanguage = localStorage.getItem("fitzone-language");
const contactForm = document.querySelector("#contact-form");

const translations = {
    th: {
        "nav.home": "หน้าหลัก",
        "nav.services": "บริการ",
        "nav.trainers": "เทรนเนอร์",
        "nav.about": "เกี่ยวกับเรา",
        "nav.contact": "ติดต่อเรา",
        "nav.join": "สมัครสมาชิก",
        "hero.join": "สมัครสมาชิกเลย",
        "hero.services": "ดูบริการของเรา",
        "nav.member": "สมาชิก",
        "nav.classes": "คลาสออกกำลังกาย",
        "nav.day": "7 วัน",
        "nav.day-open": "เปิดให้บริการ",
        "nav.head-contact": "ส่งข้อความถึงเรา",
        "nav.select": "เรื่องที่สนใจ",
        "nav.training": "เทรนเนอร์ส่วนตัว",
        "nav.other": "อื่น ๆ",
        "nav.submit": "ส่งข้อความ",
        "nav.menu": "เมนูเว็บไซต์",
        "nav.our-services": "บริการของเรา",
        "nav.weight": "เวทเทรนนิ่ง",
        "nav.yoga": "โยคะ",
        "nav.group": "คลาสกลุ่ม",
        "nav.nutrition": "โภชนาการ",
        "footer.follow": "ติดตามเรา",
        "contact.name": "ชื่อ-นามสกุล",
        "contact.email": "อีเมล",
        "contact.phone": "เบอร์โทรศัพท์",
        "contact.message": "ข้อความของคุณ",
        "hero.description": "เริ่มต้นชีวิตที่แข็งแรงไปด้วยกันกับ FitZone",
        "services.title": "บริการของเรา",
        "services.weight.desc1": "เสริมสร้างกล้ามเนื้อ",
        "services.weight.desc2": "เพิ่มความแข็งแรง",
        "services.yoga.desc1": "เพิ่มความยืดหยุ่น",
        "services.yoga.desc2": "ลดความเครียด",
        "services.group.desc1": "ออกกำลังกายสนุก",
        "services.group.desc2": "ไปพร้อมกัน",
        "services.nutrition.desc1": "วางแผนโภชนาการ",
        "services.nutrition.desc2": "เพื่อสุขภาพที่ดี",
        "about.title": "เกี่ยวกับเรา",
        "about.description": "FitZone คือศูนย์ออกกำลังกายและดูแลสุขภาพแบบครบวงจรเรามุ่งมั่นที่จะช่วยให้คุณมีสุขภาพที่แข็งแรง มีพลัง และใช้ชีวิตได้อย่างมีความสุขในระยะยาว",
        "about.feature1": "เครื่องออกกำลังกายทันสมัย",
        "about.feature2": "เทรนเนอร์มืออาชีพ",
        "about.feature3": "บรรยากาศเป็นกันเอง",
        "about.feature4": "เหมาะสำหรับทุกระดับ",
        "about.button": "รู้จัก FitZone เพิ่มเติม",
        "trainers.title": "เทรนเนอร์ของเรา",
        "trainers.coach1.name": "โค้ชนาส",
        "trainers.coach1.experience": "ประสบการณ์ 7 ปี",
        "trainers.coach2.name": "โค้ชมาย",
        "trainers.coach2.experience": "ประสบการณ์ 5 ปี",
        "trainers.coach3.name": "โค้ชท็อป",
        "trainers.coach3.experience": "ประสบการณ์ 6 ปี",
        "cta.title": "พร้อมเริ่มต้นเส้นทางสุขภาพที่ดีกว่า?",
        "cta.description": "สมัครสมาชิกวันนี้ และรับคำแนะนำจากเทรนเนอร์ของเรา",
        "contact.title": "ติดต่อเรา",
        "contact.address": "123 ถนนสุขภาพดี ต.ท่าช้าง อ.เมือง จ.สมุทร 86000",
    },

    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.trainers": "Trainers",
        "nav.about": "About Us",
        "nav.contact": "Contact",
        "nav.join": "Sign Up",
        "hero.join": "Sign up now",
        "hero.services": "See our services",
        "nav.member": "member",
        "nav.classes": "Fitness classes",
        "nav.day": "7 days",
        "nav.day-open": "Open Every Week",
        "nav.head-contact": "Send us a message",
        "nav.select": "Topics of interest",
        "nav.training": "Personal Trainer",
        "nav.other": "other",
        "nav.submit": "Send message",
        "nav.menu": "Website Menu",
        "nav.our-services": "Our Services",
        "nav.weight": "Weight Training",
        "nav.yoga": "Yoga",
        "nav.group": "Group Classes",
        "nav.nutrition": "Nutrition Coaching",
        "footer.follow": "Follow us",
        "contact.name": "Full Name",
        "contact.email": "Email",
        "contact.phone": "Phone Number",
        "contact.message": "Your Message",
        "hero.description": "Start your journey to a stronger, healthier life with FitZone",
        "services.title": "Our Services",
        "services.weight.desc1": "Build muscle",
        "services.weight.desc2": "Increase your strength",
        "services.yoga.desc1": "Improve flexibility",
        "services.yoga.desc2": "Reduce stress",
        "services.group.desc1": "Enjoy fun workouts",
        "services.group.desc2": "Train together as a team",
        "services.nutrition.desc1": "Personalized nutrition plans",
        "services.nutrition.desc2": "For a healthier lifestyle",
        "about.title": "About Us",
        "about.description": "FitZone is a comprehensive fitness and wellness center dedicated to helping you build strength, stay energized, and enjoy a healthier, happier life for years to come.",
        "about.feature1": "Modern fitness equipment",
        "about.feature2": "Professional trainers",
        "about.feature3": "Friendly atmosphere",
        "about.feature4": "Suitable for all fitness levels",
        "about.button": "Discover More About FitZone",
        "trainers.title": "Our Trainers",
        "trainers.coach1.name": "Coach Nas",
        "trainers.coach1.experience": "7 Years of Experience",
        "trainers.coach2.name": "Coach Mai",
        "trainers.coach2.experience": "5 Years of Experience",
        "trainers.coach3.name": "Coach Top",
        "trainers.coach3.experience": "6 Years of Experience",
        "cta.title": "Ready to Start Your Journey to Better Health?",
        "cta.description": "Join today and get expert guidance from our professional trainers.",
        "contact.title": "Contact Us",
        "contact.address": "123 Sukkhaphap Dee Road, The Chang Subdistrict, Mueang District, Samut province 86000"
    }
};

function changeLanguage(lang) {
    const htmlElement = document.documentElement;
    const elements = document.querySelectorAll("[data-i18n]");
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");

    htmlElement.lang = lang;
    localStorage.setItem("fitzone-language", lang);

    elements.forEach(function(element) {
        const key = element.dataset.i18n;
        const translatedText = translations[lang][key];

        if (translatedText !== undefined) {
            element.textContent = translatedText;
        }
    });

    placeholders.forEach(function(element) {
        const key = element.dataset.i18nPlaceholder;
        const translatedText = translations[lang][key];

        if (translatedText !== undefined) {
            element.placeholder = translatedText;
        }
    });
}

menuToggle.addEventListener("click", function() {
    navbarMenu.classList.toggle("active");
});

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navbarMenu.classList.remove("active");
    });
});

languageButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const lang = button.dataset.lang;
        changeLanguage(lang);
    });
});

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("นี่คือแบบฟอร์มสาธิต (Demo) ยังไม่มีการส่งข้อความจริง")
});

if (savedLanguage === "th" || savedLanguage === "en") {
    changeLanguage(savedLanguage);
} else {
    changeLanguage("th");
}
