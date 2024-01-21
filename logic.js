var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');
var joinhour = document.getElementById('hour');
var joinmin = document.getElementById('min');
var joinsec = document.getElementById('sec');
var joininterval = document.getElementById('count');
var hours=0;
var minutes=0;
var seconds=0;
var interval=0;

start.addEventListener('click',function(){
    timer =true;
    stopwatch();
});

pause.addEventListener('click', function(){
    timer = false;
});

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

function stopwatch(){
    if(timer){
        interval++;

        if(interval == 100){
            seconds++;
            interval = 0;
        }

        if(seconds == 60){
            minutes++;
            seconds = 0;
        }

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