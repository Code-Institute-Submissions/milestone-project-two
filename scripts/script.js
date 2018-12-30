var generatedColours = [];
var clickedColours = [];
var gameRunning = false;
var turnCounter = 0;
var currentTurnColours = [];

$(document).ready(function() {

    $(".button").click(function() {

        if (gameRunning != false) {

            clickedColours.push($(this).attr('id'));
            $(".click-output").text("Clicked  = " + clickedColours.toString());

            $(".message").text("clicked colors length = " + clickedColours.length + " ## currentTurnColours length = " + currentTurnColours.length);

            if (clickedColours.length == currentTurnColours.length) {
                $(".message").text("same length, which is " + clickedColours.length);

                if (!compareArrays(clickedColours, currentTurnColours)) {
                    $(".message").text("same length, differnt contents");

                }
                else {

                    $(".message").text("same length, same contents");
                    
                    newTurn();
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

function newTurn() {
    
    turnCounter++;
    clickedColours.length = 0;

    currentTurnColours = generatedColours.slice(0, turnCounter);
    $(".gen-output").text("Genereated = " + currentTurnColours.toString());
    
}

function resetFunction() {
    gameRunning = 0;
    clickedColours.length = 0;
    generatedColours.length = 0;
    turnCounter = 0;
    $(".click-output").text("");
    $(".gen-output").text("");
    $(".message").text("");
}

function compareArrays(arr1, arr2) {

    for (var i = 0; i < arr1.length; i++) {

        if (arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}
