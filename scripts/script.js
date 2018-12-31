var generatedColours = [];
var clickedColours = [];
var gameRunning = false;
var turnCounter = 0;
var currentTurnColours = [];
var totalTurns = 5;
var colours = ['red', 'blue', 'green', 'yellow'];
var speedSetting = 800;

var audioOn = true;
var redAudio = new Audio('assets/audio/red.wav');
var blueAudio = new Audio('assets/audio/blue.wav');
var greenAudio = new Audio('assets/audio/green.wav');
var yellowAudio = new Audio('assets/audio/yellow.wav');
var successAudio = new Audio('assets/audio/success.wav');
var failAudio = new Audio('assets/audio/fail.mp3');

$(document).ready(function() {

    $(".button").click(function() {

        if (gameRunning != false) {

            var colour = $(this).attr('id').toString();
            $(this).addClass(colour + "-glow").delay(200).queue(function() {
                $(this).removeClass(colour + "-glow").dequeue();
            });

            if (audioOn) {
                playAudio(colour);
            }

            //Add clicked button id to stack
            clickedColours.push($(this).attr('id'));

            //Check length, and compare last click each time to drop out on incorrect sequence
            if (clickedColours.length < currentTurnColours.length) {

                //reset here if the last click was wrong
                if (!compareArrays(clickedColours, currentTurnColours)) {

                    playAudio("fail");
                    alert("Not even nearly...");
                    resetFunction();

                }

            }
            else

                //Check here for same length and contents
                if (clickedColours.length == currentTurnColours.length) {

                    if (!compareArrays(clickedColours, currentTurnColours)) {

                        playAudio("fail");
                        alert("Oops, so close!");
                        resetFunction();

                    }
                    else {

                        if (turnCounter == totalTurns) {

                            playAudio("success");
                            alert("YOU DID IT!");
                            resetFunction();

                        }
                        else {
                            setTimeout(newTurn, 800);
                        }

                    }
                }
        }
    });
});



function startFunction() {

    if (gameRunning == 1) {
        return;
    }
    else {

        gameRunning = 1;

        currentTurnColours.length = 0;

        for (var i = 0; i < totalTurns; i++) {

            var randomColour = colours[Math.floor(Math.random() * colours.length)];
            generatedColours.push(randomColour);

        }

        newTurn();

    }


}


function changeDifficulty(val) {

    switch (val) {
        case 'easy':
            speedSetting = 800;
            totalTurns = 5;
            break;
        case 'medium':
            speedSetting = 400;
            totalTurns = 10;
            break;
        case 'hard':
            speedSetting = 250;
            totalTurns = 20;
            break;

        default:
            speedSetting = 800;
    }

    resetFunction();

}


function newTurn() {

    console.log(speedSetting);
    turnCounter++;

    $(".messageHolder").text("Turn Number: " + turnCounter.toString());

    clickedColours.length = 0;

    currentTurnColours = generatedColours.slice(0, turnCounter);

    for (var i = 0; i < currentTurnColours.length; i++) {

        playColours(i);

    }

}

function playColours(i) {

    var divColour = currentTurnColours[i].toString();

    setTimeout(function() {

        $("#" + divColour).addClass(divColour + "-glow").delay(speedSetting - 120).queue(function() {
            $("#" + divColour).removeClass(divColour + "-glow").dequeue();
        });

        if (audioOn) {
            playAudio(divColour);
        }

    }, speedSetting * i);

}


function resetFunction() {

    gameRunning = 0;
    clickedColours.length = 0;
    generatedColours.length = 0;
    turnCounter = 0;

    $(".button").removeClass("button-glow");
    $(".messageHolder").text("Click to begin!");

}


function compareArrays(arr1, arr2) {

    for (var i = 0; i < arr1.length; i++) {

        if (arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

function playAudio(colour) {

    if (colour == "red") {
        redAudio.play();
    }
    if (colour == "blue") {
        blueAudio.play();
    }
    if (colour == "green") {
        greenAudio.play();
    }
    if (colour == "yellow") {
        yellowAudio.play();
    }
    if (colour == "success") {
        successAudio.play();
    }
    if (colour == "fail") {
        failAudio.play();
    }

}
