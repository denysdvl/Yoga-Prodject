import _ from 'lodash';

window.addEventListener("DOMContentLoaded", function () {
    'use strict';
    let calc = require('./parts/calc.js'),
        formPost = require('./parts/formPost.js'),
        modal = require('./parts/modal.js'),
        slider = require('./parts/slider.js'),
        timer = require('./parts/timer.js'),
        tabs = require('./parts/tabs.js');

    calc();
    formPost();
    modal();
    slider();
    timer();
    tabs();

});
