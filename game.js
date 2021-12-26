userClickedPattern =[];
bottonColours = ["red", "green", "blue", "yellow"];

gamePattern = [];

function nextSequence() {

    var randomNumber = Math.round(Math.random()*3);
    var randomChosenColours = bottonColours[randomNumber];
    gamePattern.push(randomChosenColours);

    playSound(randomChosenColours);

}

setTimeout(function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed")
},100);

$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)

    playSound(userChosenColor);
    animatePress(userChosenColor)

})

function playSound(name) {

    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

