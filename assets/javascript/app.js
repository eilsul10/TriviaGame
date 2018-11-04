// onload function
window.onload = function () {
    $("#start").on("click", timer1.start);
    $("#start").on("click", myFunction);
    $("#start").on("click", startGame);
};

// Initialize game
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var clockRunning = true;

function myFunction() {
    var x = document.getElementById("myRadio");
    x.checked = true;
}

function startGame() {

    if (".row" == true) {
        showCorrect++;
    }
    else if (".row" == false) {
        showIncorrect++;
    }
    else if (".row" == 0) {
        showUnanswered++;
    }

}

var startTime = Date.now()

function updateTimer() {
    var timeElapsed = Date.now() - startTime
    var timeLeft = Math.floor((20000 - timeElapsed) / 1000)
    if(timeLeft < 0) {
        return endGame()
    }
    $('#timer').text("Seconds left: " + timeLeft)
}

function endGame() {
    window.location.href = "endpage.html"
    document.getElementById("showCorrect").textContent = correct;
    document.getElementById("showIncorrect").textContent = incorrect;
    document.getElementById("showUnanswered").textContent = unanswered;
}

setInterval(function() {
    updateTimer()
}, 100)

myFunction();
startGame();

