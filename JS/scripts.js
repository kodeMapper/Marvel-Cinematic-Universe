let carouselIndex = {
    'hero-carousel': 0,
    'villain-carousel': 0,
    'other-carousel': 0
};

function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelector('.carousel-slides');
    const items = slides.querySelectorAll('.carousel-item');
    carouselIndex[carouselId] = (carouselIndex[carouselId] + direction + items.length) % items.length;
    slides.style.transform = `translateX(-${carouselIndex[carouselId] * 100}%)`;
}
