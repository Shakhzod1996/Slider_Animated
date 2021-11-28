window.addEventListener('DOMContentLoaded', ()=> {
    let next = document.querySelector('.next-btn'),
    prev = document.querySelector('.prev-btn'),
    container = document.querySelector('.images');

    let counter = 0;

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    function nextSlide() {
        container.animate([{opacity: '0.1'}, {opacity: '1.0'}],
        {duration: 1000, fill: 'forwards'})
        if (counter === 4) {
            counter = -1;
        }

        counter ++;

        container.style.backgroundImage = `url(imgs/left-${counter}.jpg)`
    }

    function prevSlide() {
        container.animate([{opacity: '0.1'}, {opacity: '1.0'}],
        {duration: 1000, fill: 'forwards'})
        if (counter === 0) {
            counter = 5;
        }

        counter --;

        container.style.backgroundImage = `url(imgs/left-${counter}.jpg)`
    }
})


