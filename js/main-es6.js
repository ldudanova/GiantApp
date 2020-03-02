(function() {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 170) {
            header.classList.add("header_active");
        } else {
            header.classList.remove("header_active");
        }
    };
})();


// Smooth Scroll Start

(function() {

    const smoothScroll = function(targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function() {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function() {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
// Smooth Scroll End

// Carousel Customers Start'
card1 = document.querySelector('#cust1');
card2 = document.querySelector('#cust2');
card3 = document.querySelector('#cust3');


btnLeft = document.querySelector('#arrLeft');
btnRight = document.querySelector('#arrRight');

btnLeft.addEventListener('click', () => {
    if (card2.classList.contains('customers_slider__item_active')) {
        card2.classList.remove('customers_slider__item_active');
        card1.classList.add('customers_slider__item_active');
    } else if (card3.classList.contains('customers_slider__item_active')) {
        card3.classList.remove('customers_slider__item_active');
        card2.classList.add('customers_slider__item_active');
    }
})

btnRight.addEventListener('click', () => {
    if (card2.classList.contains('customers_slider__item_active')) {
        card2.classList.remove('customers_slider__item_active');
        card3.classList.add('customers_slider__item_active');
    } else if (card1.classList.contains('customers_slider__item_active')) {
        card1.classList.remove('customers_slider__item_active');
        card2.classList.add('customers_slider__item_active');
    }


})


// Carousel Customers End