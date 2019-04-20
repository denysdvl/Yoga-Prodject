window.addEventListener("DOMContentLoaded", function () {
    "use strict";
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
    descBtn =document.querySelectorAll(".description-btn");

 


   function openModal(){
    modal.style.display = "block";
    btnMore.classList.add("more-splash");
    document.body.style.overflow = "hidden";
    }
    btnMore.addEventListener('click', openModal); 
     descBtn[0].addEventListener('click', openModal); 
     descBtn[1].addEventListener('click', openModal); 
     descBtn[2].addEventListener('click', openModal); 
     descBtn[3].addEventListener('click', openModal); 
    console.log(descBtn);
 

   btnClose.addEventListener('click', function(){
    modal.style.display = "none";
    btnMore.classList.remove("more-splash");
    document.body.style.overflow = " ";
   });
  
});