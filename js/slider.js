let currentSlide = 0;

const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;
const slider = document.getElementById('slider');

document.getElementById('next').addEventListener('click', function() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Возвращаемся к первому слайду
    }
    updateSlider();
});

document.getElementById('prev').addEventListener('click', function() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; // Переходим к последнему слайду
    }
    updateSlider();
});

function updateSlider() {
    const offset = -currentSlide * 100; // Сдвигаем на 100% для каждого слайда
    slider.style.transform = `translateX(${offset}%)`;
}
