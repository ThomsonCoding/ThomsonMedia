class Carousel {
    constructor(parentSelector) {
        this.parent = document.querySelector(parentSelector);
        if (!this.parent) {
            console.error('Parent section not found.');
            return;
        }
        
        this.carousel = this.parent.querySelector('.carousel');
        this.prevButton = this.parent.querySelector('.carousel--button.prev');
        this.nextButton = this.parent.querySelector('.carousel--button.next');
        this.itemWidth = this.carousel.clientWidth;
        this.currentScroll = 0;

        if (!this.carousel || !this.prevButton || !this.nextButton) {
            return;
        }

        this.prevButton.addEventListener('click', this.scrollLeft.bind(this));
        this.nextButton.addEventListener('click', this.scrollRight.bind(this));
    }

    scrollLeft() {
        this.currentScroll -= this.itemWidth;
        if (this.currentScroll < 0) {
            this.currentScroll = 0;
        }
        this.carousel.scrollTo({
            left: this.currentScroll,
            behavior: 'smooth'
        });
    }

    scrollRight() {
        const maxScroll = this.carousel.scrollWidth - this.carousel.clientWidth;
        this.currentScroll += this.itemWidth;
        if (this.currentScroll > maxScroll) {
            this.currentScroll = maxScroll;
        }
        this.carousel.scrollTo({
            left: this.currentScroll,
            behavior: 'smooth'
        });
    }
}

// Usage
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section'); // Select all sections
    sections.forEach(section => {
        const carousel = section.querySelector('.carousel'); // Check if the section contains a carousel
        if (carousel) {
            const myCarousel = new Carousel(`#${section.id}`);
        }
    });
});
