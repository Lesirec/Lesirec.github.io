let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
}, 3000);

// Появление строки поиска при прокрутке
window.addEventListener("scroll", () => {
    const searchBar = document.querySelector(".search-bar");
    if (window.scrollY > 100) {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
});

let cartCount = 0;

function addToCart(button, price) {
    if (!button.classList.contains("added")) {
        button.classList.add("added");
        button.textContent = `${price} Р ✓`;
        cartCount++;
    } else {
        button.classList.remove("added");
        button.textContent = `${price} Р +`;
        cartCount--;
    }

    const cartButton = document.querySelector(".cart-btn");
    if (cartCount > 0) {
        cartButton.classList.remove("hidden");
    } else {
        cartButton.classList.add("hidden");
    }
}

function openCart() {
    alert("Открытие корзины...");
}
