var generatedColours = [];
var clickedColours = [];
var gameRunning = false;
var turnCounter = 0;
var currentTurnColours = [];

$(document).ready(function() {

    $(".button").click(function() {

        if (gameRunning != false) {

            //Glow on click
            $(this).addClass("button-glow").delay(300).queue(function() {
                $(this).removeClass("button-glow").dequeue();
            });


            //Add clicked button id to stack
            clickedColours.push($(this).attr('id'));

            //Check length, and compare last click each time to drop out on incorrect sequence
            if (clickedColours.length <= currentTurnColours.length) {

                //reset here if the last click was wrong

            }

            //Check here for same length and contents
            if (clickedColours.length == currentTurnColours.length) {

                if (!compareArrays(clickedColours, currentTurnColours)) {

                    resetFunction();

                }
                else {

                    setTimeout(newTurn, 600);
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
    clickedColours.length = 0;

    currentTurnColours = generatedColours.slice(0, turnCounter);

    //$(".click-output").text("Current turn colours = " + currentTurnColours.toString());
    //$(".gen-output").text("Number of colours = " + currentTurnColours.length.toString());


    for (var i = 0; i < currentTurnColours.length; i++) {

        playColours(i);

    }

}

function playColours(i) {

    var divColour = currentTurnColours[i].toString();

    setTimeout(function() {

        $("#" + divColour).addClass("button-glow").delay(300).queue(function() {
            $("#" + divColour).removeClass("button-glow").dequeue();
        });

    }, 500 * i);

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

}


function compareArrays(arr1, arr2) {

    for (var i = 0; i < arr1.length; i++) {

        if (arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}
