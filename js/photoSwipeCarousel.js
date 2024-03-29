import PhotoSwipe from 'photoswipe';

import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';


// Create a function to initialize the lightbox
function initializeLightbox() {
    const lightbox = new PhotoSwipeLightbox({
        // Select the carousel element
        gallery: '.carousel',
        // Elements within carousel (slides)
        children: '.carousel--item img',
        // Use the imported PhotoSwipe module
        pswpModule: PhotoSwipe
    });

    // Initialize the lightbox
    lightbox.init();
}

// Call the function to initialize the lightbox
initializeLightbox();
