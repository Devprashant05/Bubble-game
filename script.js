var timerVal = 60;
var score = 0;
var hitrn;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreNum").textContent = score;
}

function hitNum() {
    hitrn = Math.floor(Math.random() * 10) + 1;
    document.querySelector("#hit").textContent = hitrn;
}

function timer() {
    var runtimer = setInterval(() => {
        if (timerVal > 0) {
            timerVal--;
            document.querySelector("#timerVal").textContent = timerVal;
        } else {
            clearInterval(runtimer);
            document.querySelector(".pbtm").innerHTML = `<div class="final">
            <h1>Game Over!!</h1>
            <br>
            <h2>Your Score is : ${score} </h2>
        </div>`
        }
    }, 1000);
}

function bubbleMaker() {
    var clutter = "";

    for (var i = 1; i <= 180; i++) {
        var rn = Math.floor(Math.random() * 10) + 1;
        clutter += `<div class="circle">${rn}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = clutter;
}


document.querySelector(".pbtm").addEventListener("click", function (details) {
    var clickedNumber = Number(details.target.textContent);
    console.log(clickedNumber);
    if (clickedNumber === hitrn) {
        increaseScore();
        bubbleMaker();
        hitNum();
    }
});

hitNum();
timer();
bubbleMaker();

