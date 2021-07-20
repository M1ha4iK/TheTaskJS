'use strict';

const field = document.querySelector('.field');
const cellSize = 100;

const empty = {
    value: 0,
    left: 0,
    top: 0
};

const cells = [];
cells.push(empty);

document.getElementById('buttonSound').addEventListener("click", changeNow);

function changeNow() {
    var img = document.getElementById("img-sound"); 
    if (img.getAttribute("src") === "../TheTaskJS/content/sound/SoundOn.png") {    
      img.setAttribute("src", "../TheTaskJS/content/sound/SoundOff.png");
    } else {
      img.setAttribute("src", "../TheTaskJS/content/sound/SoundOn.png");
    }
}
  



function move(index) {
    const cell = cells[index];
    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);

    if (leftDiff + topDiff > 1) {
        return;
    }
    else {
        var img = document.getElementById("img-sound"); 
        if (img.getAttribute("src") === "../TheTaskJS/content/sound/SoundOn.png") {    
            var audio = new Audio("../TheTaskJS/audio/click.mp3");
            audio.play();
        }
        steps++;
        let stepsCount = document.getElementById("stepsCount");
        stepsCount.innerHTML = steps;
    }



    cell.element.style.left = `${empty.left * cellSize}px`;
    cell.element.style.top = `${empty.top * cellSize}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    empty.left = cell.left;
    empty.top = cell.top;
    cell.left = emptyLeft;
    cell.top = emptyTop;


    const isFinished = cells.every(cell => {
        return cell.value === cell.top * 4 + cell.left;
    });

    if (isFinished) {
        var timeInput = time.value;
        let timerShow = document.getElementById("timer");
        var resultTime = timerShow.outerHTML.replace(/\D+\W/g, "");

        var arrTime = resultTime.split(":");

        resultTime = (Number(timeInput) * 60) - (Number(arrTime[0]) * 60 + Number(arrTime[1]));

        if (resultTime <= 0) {
            alert("Поздравляем, вы справились сделав " + steps + " шагов!");
        }
        else if (resultTime % 10 === 0 || resultTime % 10 >= 5 || resultTime >= 11 && resultTime <= 19) {
            alert("Поздравляем, вы справились за " + resultTime + " секунд, сделав " + steps + " шагов!");
        }
        else if (resultTime % 10 === 1) {
            alert("Поздравляем, вы справились за " + resultTime + " секунду, сделав " + steps + " шагов!");
        }
        else {
            alert("Поздравляем, вы справились за " + resultTime + " секунды, сделав " + steps + " шагов!");
        }

        location.reload();
    }

}


const numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);

for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    const value = numbers[i - 1] + 1;
    cell.className = 'cell';
    cell.innerHTML = value;
    cell.style.backgroundColor = "#" + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
        value: value,
        left: left,
        top: top,
        element: cell
    });

    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;


    field.append(cell);

    var steps = 0;
    cell.addEventListener("click", () => {
        move(i)
    });
}




