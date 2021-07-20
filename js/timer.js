let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("buttonStart");
let buttonRef = document.getElementById("buttonRefresh");
let timerShow = document.getElementById("timer"); 


buttonRef.addEventListener('click', function() {
    location.reload();
})


var started = 0;
buttonRun.addEventListener('click', function() {
    if(started === 1){
        alert("Таймер уже запущен!");
    }
    else if (timerInput.value > 0 && timerInput.value <= 60) {
        timeMinut = parseInt(timerInput.value) * 60

        timer = setInterval(function () {
            seconds = timeMinut % 60 
            minutes = timeMinut / 60 % 60 
    
            if (timeMinut <= 0) {
                clearInterval(timer);
                alert("Время закончилось");
                location.reload();
            } else {
                if(timeMinut < 600){
                    if (seconds <= 9) {
                        let strTimer = `0${Math.trunc(minutes)}:0${seconds}`;
                        timerShow.innerHTML = strTimer;
                    }
                    else{
                        let strTimer = `0${Math.trunc(minutes)}:${seconds}`;
                        timerShow.innerHTML = strTimer;
                    }
                }
                
                else{
                    if (seconds <= 9) {
                        let strTimer = `${Math.trunc(minutes)}:0${seconds}`;
                        timerShow.innerHTML = strTimer;
                    }
                    else{
                        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
                        timerShow.innerHTML = strTimer;
                    }
                }
                
            }
            --timeMinut
        }, 1000)
        started++;
    }
    else {
        alert("Введите время, в минутах(Не более 60 минут)!");
    }
})

