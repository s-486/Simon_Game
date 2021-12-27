bottonColours = ["red", "green", "blue", "yellow"];

gamePattern = [];
userClickedPattern =[];

var started = false;

var level = 0;

$(window).on("keypress", function(event) {

    if(!started) {
        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
    }

});

$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer((userClickedPattern.length)-1);

});

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            },1000);
        }
    }
    else{
        // console.log("Wrong");
        $(document).addClass("game-over");

        setTimeout(function() {
            $(document).removeClass("game-over");
        }, 2000);

        var wrong_2 = new Audio("sounds/wrong.mp3")
        wrong_2.play();

        $("#level-title").text("Game Over, Press Any Key to Restart");

        started = false;
        level = 0;
        userClickedPattern = [];
        gamePattern = [];
    }
}

function nextSequence() {

    userClickedPattern = [];

    var randomNumber = Math.round(Math.random()*3);
    var randomChosenColours = bottonColours[randomNumber];
    gamePattern.push(randomChosenColours);

    playSound(randomChosenColours);
    level += 1;
    $("#level-title").text("level " + level);


}

function playSound(name) {

    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");

    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}




