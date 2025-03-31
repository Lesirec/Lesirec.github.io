let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000);

window.addEventListener('scroll', () => {
    const promo = document.querySelector('.promo-container');
    const searchBar = document.querySelector('.search-bar');
    if (window.scrollY > 50) {
        promo.style.opacity = '0';
        searchBar.style.display = 'block';
    } else {
        promo.style.opacity = '1';
        searchBar.style.display = 'none';
    }
});
