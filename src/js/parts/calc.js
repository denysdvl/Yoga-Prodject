function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    function changInput(elemntInput) {
        elemntInput.addEventListener('change', function () {
            if (elemntInput == persons) {
                personsSum = +this.value;
                total = (daysSum + personsSum) * 4000;
            } else if (elemntInput == restDays) {
                daysSum = +this.value;
                total = (daysSum + personsSum) * 4000;
            }
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * place.options[place.selectedIndex].value;
            }

        });
    }
    changInput(persons);
    changInput(restDays);
    changInput(place);
}
module.exports = calc;