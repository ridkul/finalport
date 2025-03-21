// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hero Section Animations
const tl = gsap.timeline();

// Bounce-in effect for welcome text
tl.from(".welcome-text", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "bounce.out",
}).to(".welcome-text", {
    opacity: 1
});

// Slide-in animation for name and description
tl.from("h1", {
    duration: 0.8,
    opacity: 0,
    x: -100,
    ease: "power3.out",
}).to("h1", {
    opacity: 1
});

tl.from(".hero-description", {
    duration: 0.8,
    opacity: 0,
    x: -100,
    ease: "power3.out",
}).to(".hero-description", {
    opacity: 1
});

tl.from(".cta-btn", {
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "back.out",
}).to(".cta-btn", {
    opacity: 1
});

// Scaling animation for profile image
tl.from(".profile-img", {
    duration: 1.5,
    scale: 0,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
}).to(".profile-img", {
    opacity: 1
});

// About Section Animations
gsap.from(".about .section-title", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "power3.out",
});

gsap.from(".about-text p", {
    scrollTrigger: {
        trigger: ".about-text",
        start: "top 70%",
    },
    duration: 0.8,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    ease: "power3.out",
});

gsap.from(".skill-item", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 70%",
    },
    duration: 0.5,
    opacity: 0,
    y: 30,
    stagger: 0.1,
    ease: "back.out",
});

// Projects Section Animation
gsap.from(".projects .section-title", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 70%",
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "power3.out",
});

gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 70%",
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out",
});

// Contact Section Animation
gsap.from(".contact .section-title", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 70%",
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "power3.out",
});

gsap.from(".contact-form", {
    scrollTrigger: {
        trigger: ".contact-form",
        start: "top 70%",
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "back.out",
});

// Interactive hover effects on skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            y: -10,
            backgroundColor: "#38bdf8",
            color: "#0f172a",
            duration: 0.3
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            y: 0,
            backgroundColor: "#1e293b",
            color: "#f8fafc",
            duration: 0.3
        });
    });
});

// Interactive hover effects on project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -15,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            duration: 0.3
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            duration: 0.3
        });
    });
});