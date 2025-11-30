const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

window.addEventListener("scroll", () => {
    const scrollProgress = document.getElementById("scroll-progress");
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + "%";
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let valid = true;
    
    [name, email, message].forEach(field => field.style.border = "1px solid #444");
    
    if (name.value.trim() === "") {
        name.style.border = "2px solid red";
        valid = false;
    }
    if (email.value.trim() === "") {
        email.style.border = "2px solid red";
        valid = false;
    }
    if (message.value.trim() === "") {
        message.style.border = "2px solid red";
        valid = false;
    }
    
    if (!valid) {
        alert("Please fill in all fields.");
        return;
    }
    
    alert("Thank you! Your message has been received.");
    form.reset();
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});