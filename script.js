// Skill Progress Animation
const progresses = document.querySelectorAll(".progress div");

window.addEventListener("scroll", () => {
    progresses.forEach(bar => {
        const value = bar.getAttribute("data-progress");
        const top = bar.getBoundingClientRect().top;

        if (top < window.innerHeight) {
            bar.style.width = value + "%";
        }
    });
});

// Dummy Contact Submit
document.querySelector(".contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully (Dummy)");
});
