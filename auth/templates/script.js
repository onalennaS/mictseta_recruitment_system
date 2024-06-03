document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('rotatableImage');
    let rotated = false;

    image.addEventListener('click', function() {
        if (!rotated) {
            image.style.transform = 'rotate(90deg)';
        } else {
            image.style.transform = 'rotate(0deg)';
        }
        rotated = !rotated;
    });
});