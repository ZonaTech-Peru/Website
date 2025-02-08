document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelector('.testimonials__cards');
    let index = 0;

    function moveCarousel() {
        const items = testimonials.children;
        index = (index + 1) % items.length;
        testimonials.scrollTo({
            left: items[index].offsetLeft,
            behavior: 'smooth'
        });
    }

    setInterval(moveCarousel, 3000);
});