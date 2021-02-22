
// Define button element
let refreshButton = document.getElementById('banners__button');

if (window.screen.width < 321) {
    refreshButton.innerHTML = 'REPLAY ANIMATION';
}

refreshButton.addEventListener('click', () => {

    // Grab all banners
    let allBanners = document.querySelectorAll('.banner');

    // Cause each banner to refresh by
    // adding a blank character to each one's SRC
    allBanners.forEach(element => {
        element.src += '';
    });

});