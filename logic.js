var start = document.getElementById('start'); //start button ID
var pause = document.getElementById('pause'); //pause button ID
var reset = document.getElementById('reset'); //reset button ID
var joinhour = document.getElementById('hour'); //Hour display
var joinmin = document.getElementById('min'); //Minutes display
var joinsec = document.getElementById('sec'); //Seconds display
var joininterval = document.getElementById('count'); //counter set
var hours=0;
var minutes=0;
var seconds=0;
var interval=0;

// event listener on start
start.addEventListener('click',function(){
    timer =true;
    stopwatch(); //function call
});

// event listener on pause
pause.addEventListener('click', function(){
    timer = false;
});

// event listener on reset
reset.addEventListener('click',function(){
    timer=false;
    hours = 0;
    minutes = 0;
    seconds=0;
    interval=0;
    joinhour.innerHTML = '00';
    joinmin.innerHTML = '00';
    joinsec.innerHTML = '00';
    joininterval.innerHTML = '00';
});

// updates the timing of the hour/min/sec
function stopwatch(){
    if(timer){
        interval++;
//once the interval reaches 100; 1 second starts
        if(interval == 100){
            seconds++;
            interval = 0;
        }
//once the seconds reaches 60; 1 minute starts
        if(seconds == 60){
            minutes++;
            seconds = 0;
        }
//once the minutes reaches 60; 1 Hour starts
        if(minutes == 60){
            hours++;
            minutes=0;
            seconds=0;
        }
    }

        let hourString = hours; 
        let minString = minutes; 
        let secString = seconds; 
        let intervalString = interval; 
//updating the text once the tens value is two digits
    if(hours<10){
        hourString = '0' + hourString;
    }
    if(minutes<10){
        minString = '0' + minString;
    }
    if(seconds<10){
        secString = '0' + secString;
    }
    if(interval<10){
        intervalString = '0' + intervalString;
    }

    joinhour.innerHTML = hourString;
    joinmin.innerHTML = minString;
    joinsec.innerHTML = secString;
    joininterval.innerHTML = intervalString;
    setTimeout(stopwatch, 10);

}
