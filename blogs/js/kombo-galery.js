document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.blog-gallery__track');
    const images = track.querySelectorAll('img');
    const prevBtn = document.querySelector('.blog-gallery__btn--prev');
    const nextBtn = document.querySelector('.blog-gallery__btn--next');

    let index = 0;

    function updateGallery() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateGallery();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateGallery();
    });
});
