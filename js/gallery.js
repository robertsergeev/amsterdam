const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.gallery-thumbnails img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
        
        thumbnails.forEach(img => img.classList.remove('active'));
        thumbnail.classList.add('active');
    });
});