function slider() {
    let slidesIndx = 1,
        slider = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");
    showSlid(slidesIndx);

    function showSlid(num) {
        if (num > slider.length) {
            slidesIndx = 1;
        }
        if (num < 1) {
            slidesIndx = slider.length;
        }

        slider.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slider[slidesIndx - 1].style.display = 'block';
        dots[slidesIndx - 1].classList.add('dot-active');
    }

    function plusItem(num) {
        showSlid(slidesIndx += num);
    }

    function cuurentSlid(num) {
        showSlid(slidesIndx = num);
    }
    prev.addEventListener('click', () => {
        plusItem(-1);
    });
    next.addEventListener('click', () => {
        plusItem(1);
    });
    dotsWrap.addEventListener('click', (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                cuurentSlid(i);
            }
        }
    });
}
module.exports = slider;