/* scripts.js */
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
}, 3000);

window.addEventListener("scroll", () => {
    const searchBar = document.querySelector(".search-bar");
    if (window.scrollY > 100) {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
});

