// crystal variables
var blue = 0;
var green = 0;
var purple = 0;
var red = 0;

// target and your score variables
var targetScore = 0;
var yourScore = 0;

// wins and losses variables
var winCount = 0;
var lossCount = 0;

// div variable
var yourScoreTag =  document.getElementById("yourScore");


// functions

// allows 5 random numbers crystals and target
var randomNumber = function(min, max) {
    console.log(min,max);
    return Math.floor(Math.random() * (max -min + 1)) + min;
}

var startGame = function() {
    console.log("START")
    //reset current score 
    yourScore = 0;

    //set target score range
    targetScore = randomNumber(25, 183);

    //set crystal values
    blue     = randomNumber (1, 12);
    green    = randomNumber (1, 12);
    purple   = randomNumber (1, 12);
    red      = randomNumber (1, 12);
    console.log(blue)

    //inner.html
    $("#yourScore").html(yourScore);
    $("#targetScore").html(targetScore);

 
    console.log ("-------------------------");
    console.log ("Target Score: " + targetScore);
    console.log("blue: " + blue + "|green: " + green + " | purple: " + purple + "| red:" +
    red);
    console.log ("-------------------------");

};


function didYouWin() {
    yourScoreTag.innerHTML = yourScore;
    if(yourScore > targetScore) {
        lossCount++;
        alert("Sorry, you lost.");
        $("#lossCount").text(lossCount);
        startGame();
    } else if (yourScore === targetScore) {
        winCount++;
        $("#winCount").text(winCount);
        alert("You won!");
        startGame();
    }

}
// $(newGame)


$("#blue").click(function() {
    console.log(blue);
    yourScore += blue;
    didYouWin() 
});

$("#green").click(function() {
    console.log(green);
    yourScore += green;
    didYouWin()
});

$("#purple").click(function() {
    console.log(purple);
    yourScore += purple;
    didYouWin()
});

$("#red").click(function() {
    console.log(red);
    yourScore += red;
    didYouWin()
});

startGame();

