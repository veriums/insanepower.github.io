// Apply transition effect when the page loads
document.body.style.opacity = 0;
window.onload = function () {
    document.body.style.transition = 'opacity 1s ease-in-out';
    document.body.style.opacity = 1;
};
