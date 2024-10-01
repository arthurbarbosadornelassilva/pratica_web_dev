let currentIndex = 0;

// Script para carrossel automatico basico

// function move(direction) {
//     const images = document.getElementById('images');
//     const totalImages = document.querySelectorAll('.image').length;
//     currentIndex = (currentIndex + direction + totalImages) % totalImages;
//     images.style.transform = 'translateX(' + (-currentIndex * 300) + 'px)';
// }

// Script para carrossel interativo

const images = document.querySelectorAll('.image'); // Get all images
const totalImages = images.length;

function updateCarousel() {
    const offset = currentIndex * -300; // Adjust the 300px width as per your image width
    document.querySelector('.images').style.transform = `translateX(${offset}px)`;
}

function move(direction) {
    currentIndex += direction;

    // Make sure index stays within the bounds of images
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Loop back to the last image
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Loop back to the first image
    }

    updateCarousel();
}