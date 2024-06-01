document.addEventListener('DOMContentLoaded', () => {
    const characterImage = document.querySelector('.character-image');
    const sectionImages = document.querySelectorAll('.section-image');
    const interactiveTexts = document.querySelectorAll('.interactive-text');
    const interactiveListItems = document.querySelectorAll('.interactive-list li');

    const addLightbox = (imgSrc) => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = imgSrc;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    };

    characterImage.addEventListener('click', () => addLightbox(characterImage.src));
    
    sectionImages.forEach(image => {
        image.addEventListener('click', () => addLightbox(image.src));
    });

    interactiveTexts.forEach(text => {
        text.addEventListener('mouseover', () => {
            text.style.color = '#ff6600';
            text.style.transform = 'scale(1.05)';
        });

        text.addEventListener('mouseout', () => {
            text.style.color = '';
            text.style.transform = '';
        });
    });

    interactiveListItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.background = '#ff6600';
            item.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseout', () => {
            item.style.background = '#333';
            item.style.transform = '';
        });
    });
});
