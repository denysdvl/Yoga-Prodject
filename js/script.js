window.addEventListener("DOMContentLoaded", function () {
    'use strict';
    ///////////////////////tab menu
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(b) {
        for (let i = b; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(a) {
        if (tabContent[a].classList.contains("hide")) {
            tabContent[a].classList.remove("hide");
            tabContent[a].classList.add("show");
        }
    }
    info.addEventListener("click", function (event) {
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);

                }
            }
        }
    });

    ///////////////////Timer

    let deadline = "2019-04-25";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds, minutes, hours;
        if (t <= 0) {
            seconds = "00";
            minutes = "00";
            hours = "00";
        } else {
            seconds = Math.floor((t / 1000) % 60);
            minutes = Math.floor((t / 1000 / 60) % 60);
            hours = Math.floor(t / (1000 * 60 * 60));
        }

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };

    }

    function setClock(id, endtime) {
        let time = document.getElementById(id),
            seconds = time.querySelector('.seconds'),
            minutes = time.querySelector('.minutes'),
            hours = time.querySelector('.hours'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            seconds.textContent = t.seconds;
            minutes.textContent = t.minutes;
            hours.textContent = t.hours;
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);

    ///////////modal
    let btnMore = document.querySelector(".more"),
        modal = document.querySelector(".overlay"),
        btnClose = document.querySelector(".popup-close"),
        descBtn = document.querySelectorAll(".description-btn");

    function openModal(element) {
        element.addEventListener('click', () => {
            modal.style.display = "block";
            btnMore.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });
    }

    openModal(btnMore);
    descBtn.forEach((element) => {
        openModal(element);
    });

    btnClose.addEventListener('click', function () {
        modal.style.display = "none";
        btnMore.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

    ////////////////Form
    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
    };
    let form = document.querySelector('.main-form'),
        contact = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function postServerForm(event, targetEvent) {
        event.preventDefault();
        console.log(event.target);
        targetEvent.appendChild(statusMessage);
        let dataForm = new FormData(targetEvent);

        function postData(formData) {
            return new Promise((resolve, reject) => {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                let obj = {};
                formData.forEach((value, key) => {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                }
                request.send(json);
            });
        } // end postData
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
        postData(dataForm)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
    }



    form.addEventListener('submit', (event) => {
        let eventForm = event,
            target = event.target;
        postServerForm(eventForm, target);
    });

    contact.addEventListener('submit', (event) => {
        let eventForm = event,
            target = event.target;
        postServerForm(eventForm, target);
        clearInput();
    });
    //////////slide

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

    function plusItem(num){
        showSlid(slidesIndx += num);
    }
    function cuurentSlid(num){
        showSlid(slidesIndx = num);
    }
    prev.addEventListener('click', ()=>{
        plusItem(-1);
    });
    next.addEventListener('click', ()=>{
        plusItem(1);
    });
    dotsWrap.addEventListener('click', (event)=>{
        for(let i = 0; i< dots.length + 1; i++){
            if(event.target.classList.contains('dot') && event.target == dots[i - 1]){
                cuurentSlid(i);
            }
        }
    })
});