let currentIndex = 0;

function move(direction) {
    const images = document.getElementById('images');
    const totalImages = document.querySelectorAll('.image').length;
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    images.style.transform = 'translateX(' + (-currentIndex * 300) + 'px)';
}