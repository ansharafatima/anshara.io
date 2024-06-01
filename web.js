document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation on scroll
    const elementsToAnimate = document.querySelectorAll('.about, .games, .characters, .game, .character');
    const animateOnScroll = () => {
        elementsToAnimate.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom > 0) {
                element.classList.add('in-view');
            } else {
                element.classList.remove('in-view');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});
