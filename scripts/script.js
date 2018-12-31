var generatedColours = [];
var clickedColours = [];
var gameRunning = false;
var turnCounter = 0;
var currentTurnColours = [];

$(document).ready(function() {

    $(".button").click(function() {

        if (gameRunning != false) {

            var colour = $(this).attr('id').toString();
            $(this).addClass(colour + "-glow").delay(300).queue(function() {
                $(this).removeClass(colour + "-glow").dequeue();
            });

            //Add clicked button id to stack
            clickedColours.push($(this).attr('id'));

            //Check length, and compare last click each time to drop out on incorrect sequence
            if (clickedColours.length < currentTurnColours.length) {

                //reset here if the last click was wrong
                if (!compareArrays(clickedColours, currentTurnColours)) {

                    alert("Not even nearly...");
                    resetFunction();

                }

            }
            else

                //Check here for same length and contents
                if (clickedColours.length == currentTurnColours.length) {

                    if (!compareArrays(clickedColours, currentTurnColours)) {

                        alert("Oops, so close!");
                        resetFunction();

                    }
                    else {

                        setTimeout(newTurn, 900);
                    }
                }
        }
    });
});



function startFunction() {

    gameRunning = 1;
    currentTurnColours.length = 0;

    var colours = ['red', 'blue', 'green', 'yellow'];

    for (var i = 0; i < 50; i++) {

        var randomColour = colours[Math.floor(Math.random() * colours.length)];
        generatedColours.push(randomColour);

    }

    newTurn();

}


function highlightStack() {



}


function newTurn() {

    console.clear();
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

        $("#" + divColour).addClass(divColour + "-glow").delay(300).queue(function() {
            $("#" + divColour).removeClass(divColour + "-glow").dequeue();
        });

    }, 620 * i);

}


function resetFunction() {

    gameRunning = 0;
    clickedColours.length = 0;
    generatedColours.length = 0;
    turnCounter = 0;
    $(".click-output").text("");
    $(".gen-output").text("");
    $(".message").text("");
    $(".button").removeClass("button-glow");
    $(".messageHolder").text("");

}


function compareArrays(arr1, arr2) {

    for (var i = 0; i < arr1.length; i++) {

        if (arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}
