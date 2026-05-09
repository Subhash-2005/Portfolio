document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const typingTextElement = document.querySelector(".typing-text");
    const phrases = ["Full Stack Developer", "MERN Stack Developer", "DSA Enthusiast", "Building Scalable Web Apps"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Dark Mode Toggle
    if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    darkModeToggle.onclick = () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("mode", document.body.classList.contains("dark-mode") ? "dark" : "light");
    };

    const navToggle = document.getElementById("navToggle");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section[id]");

    navToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 140;
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLink.classList.add("active");
                } else {
                    navLink.classList.remove("active");
                }
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    // Typing Effect
    function type() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex--);
        } else {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentPhrase.length + 1) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && charIndex === -1) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            charIndex = 0;
        }

        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typingSpeed);
    }

    type();
});

