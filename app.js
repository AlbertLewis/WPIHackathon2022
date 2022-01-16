'use strict'

const switcher = document.querySelector('.btn');
const time_control = document.querySelector('input[type="time"]');

switcher.addEventListener('click', switchTheme);
pick_time.addEventListener('change', calculate_wakeup_time);


function switchTheme() {

    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light"
    }

    console.log('current class name: ' + className);
    
    
}