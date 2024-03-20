document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel--button.prev');
    const nextButton = document.querySelector('.carousel--button.next');
    const itemWidth = carousel.clientWidth; // Use clientWidth to get visible width
    let currentScroll = 0;

    // Function to scroll carousel to the left
    const scrollLeft = () => {
        currentScroll -= itemWidth;
        if (currentScroll < 0) {
            currentScroll = 0;
        }
        carousel.scrollTo({
            left: currentScroll,
            behavior: 'smooth'
        });
    };

    // Function to scroll carousel to the right
    const scrollRight = () => {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        currentScroll += itemWidth;
        if (currentScroll > maxScroll) {
            currentScroll = maxScroll;
        }
        carousel.scrollTo({
            left: currentScroll,
            behavior: 'smooth'
        });
    };

    // Event listener for previous button
    prevButton.addEventListener('click', scrollLeft);

    // Event listener for next button
    nextButton.addEventListener('click', scrollRight);
});
