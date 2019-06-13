// crystal variables
var blue = 0;
var green = 0;
var purple = 0;
var red = 0;

// target and your score variables
var targetScore = 0;
var currentScore = 0;

// wins and losses variables
var winCount = 0;
var lossCount = 0;


// functions

// allows 5 random numbers crystals and target
var randomNumber = function(min, max) {
    console.log(min,max);
    return Math.floor(Math.random() * (max -min + 1)) + min;
}

var startGame = function() {
    console.log("START")
    //reset current score 
    var yourNumber = 0;

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

    // responds to crystals
    //var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
    // yourScore.innerHTML = 0;
    // targetScore.innerHTML = randomNumber(10, 4);

    // function addToScore(val) {
    // var numberToAdd = parseInt(val);
    // var yourScore = parseInt(yourScore.innerHTML);
    // yourScore.innerHTML = numberToAdd + yourScore;
};
};

$("#blue").click(function() {
    console.log(blue);
});

$("#green").click(function() {
    console.log(green);
});

$("#purple").click(function() {
    console.log(purple);
});

$("#red").click(function() {
    console.log(red);
});

startGame();

