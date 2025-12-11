// Smooth scroll for header buttons
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact Form Submission
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        formMessage.innerText = "Thank you! Your message has been sent.";
        formMessage.style.color = "green";
        form.reset();
    } else {
        formMessage.innerText = "Please fill in all fields.";
        formMessage.style.color = "red";
    }
});