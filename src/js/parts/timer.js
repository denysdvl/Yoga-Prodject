function timer() {
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
}
module.exports = timer;