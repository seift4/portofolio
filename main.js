/* ==========================================
   1. تعريف مصفوفة الصور الخاصة بالثيم (Dark/Light)
   هنا بنحدد IDs العناصر وصورها في الوضعين الفاتح والغامق
   ========================================== */
const themeImages = [
  { 

  }
];

/* ==========================================
   2. وظائف تبديل الثيم وحفظ الإعدادات (Dark Mode)
   الجزء ده مسئول عن تغيير الثيم وحفظ اختيار المستخدم في المتصفح
   ========================================== */
const toggleBtn = document.getElementById("darkToggle");

function updateImages(isDark) {
  themeImages.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.src = isDark ? item.dark : item.light;
    }
  });
}

const savedTheme = localStorage.getItem("theme");
const isDark = savedTheme === "dark";
if (isDark) document.body.classList.add("dark-mode");
updateImages(isDark);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const nowDark = document.body.classList.contains("dark-mode");
  updateImages(nowDark);
  localStorage.setItem("theme", nowDark ? "dark" : "light");
});



















(function() {
    // استبدل PUBLIC_KEY بمفتاحك الخاص من Account Settings
    emailjs.init("CIURh-wVyTegOXfXy");
})();

document.getElementById('send-btn').addEventListener('click', function() {
    // تجهيز البيانات من الـ Inputs
    const serviceID = 'service_n64ctne'; // هتلاقيه في Email Services
    const templateID = 'template_7rsa09k'; // هتلاقيه في Email Templates

    const params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    // إرسال الإيميل
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("تم الإرسال بنجاح! هرد عليك قريب جداً.");
            // تفريغ الفورم بعد الإرسال
            document.getElementById("from_name").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("message").value = "";
        })
        .catch(err => {
            console.log(err);
            alert("للأسف حصل مشكلة، حاول تاني.");
        });
});

// برمجة زرار الـ Reset
document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById("from_name").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("message").value = "";
});








document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('marqueeTrack');
    
    // بنكرر المحتوى مرة واحدة بس عشان نخلق وهم اللوب اللا نهائية
    const clone = track.innerHTML;
    track.innerHTML += clone;
});











const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".ul a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});



const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // يظهر مرة واحدة بس
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach(el => observer.observe(el));


// ===== Simple Parallax for Home Background =====
window.addEventListener('scroll', () => {
    const home = document.querySelector('.home');
    const scrollPos = window.scrollY;
    home.style.backgroundPositionY = `${scrollPos * 0.5}px`;
});

// ===== Clear placeholder on focus (Contact Form) =====
const inputs = document.querySelectorAll('.in input');
inputs.forEach(input => {
    const placeholderText = input.value;
    input.addEventListener('focus', () => {
        if (input.value === placeholderText) input.value = '';
    });
    input.addEventListener('blur', () => {
        if (input.value === '') input.value = placeholderText;
    });
});

// ===== Extra hover glow for skill icons =====
document.querySelectorAll('.front > div').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-10px) scale(1.1)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0) scale(1)';
    });
});
















const vedSection = document.querySelector('.ved');
const video = vedSection.querySelector('.parallax-media');

vedSection.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = vedSection.getBoundingClientRect();
    
    // تحديد نقطة السنتر (المركز)
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // حساب بعد الماوس عن المركز
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // تحويل البعد لدرجات دوران (مثلاً بحد أقصى 15 درجة)
    const rotateX = (-mouseY / (height / 2)) * 25; 
    const rotateY = (mouseX / (width / 2)) * 25;

    // تطبيق الدوران
    video.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// إرجاع الفيديو لحالته الطبيعية عند خروج الماوس
vedSection.addEventListener('mouseleave', () => {
    video.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

///////////////////////////////////////////////////////////


const modelViewer = document.querySelector("#myModel");



    // عندما يخرج الماوس من فوق الموديل
    modelViewer.addEventListener('mouseleave', () => {
        modelViewer.autoRotate = true;
    });









    






    window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 1000);
});




















/* ==========================================
   3. تحريك مؤشر الماوس المخصص (Custom Cursor)
   ده الجزء اللي بيخلي الدائرة تتبع الماوس وتكبر عند الوقوف على عناصر معينة
   ========================================== */
const cursorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.transform = `translate(${posX - 6}px, ${posY - 6}px)`;
});

const interactiveElements = document.querySelectorAll('a, button, p, h1, h2, span, li');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.classList.add('cursor-active');
    });
    el.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('cursor-active');
    });
});

let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
