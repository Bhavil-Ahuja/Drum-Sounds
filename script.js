var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    buttonEffects(this.innerHTML);
  });
}

document.addEventListener("keydown", function(Key) {
  playSound(Key.key);
  buttonEffects(Key.key);
})

function playSound(val) {
  switch (val) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/tom-2.mp3");
      audio1.play();
      break;
    case "s":
      var audio1 = new Audio("sounds/tom-3.mp3");
      audio1.play();
      break;
    case "d":
      var audio1 = new Audio("sounds/tom-4.mp3");
      audio1.play();
      break;
    case "j":
      var audio1 = new Audio("sounds/snare.mp3");
      audio1.play();
      break;
    case "k":
      var audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;
    case "l":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;
    default:
  }
}

function buttonEffects(keyVal) {
  document.querySelector("." + keyVal).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + keyVal).classList.remove("pressed");
  }, 100);
}
