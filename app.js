'use strict'

function calculateTime() {
    var input_time = document.getElementById("time").value;
    var hours = parseInt(input_time.substring(0,input_time.indexOf(':')));
    var minutes = input_time.substring(input_time.indexOf(':')+1);

    hours = hours - 8;

    if(hours <= 0) {
        return (hours + 12).toString() + ":" + minutes;
    }
    else {
        return hours.toString() + ":" + minutes;
    }


}

function showInput() {

    document.getElementById('display').innerHTML =
    calculateTime();
}
