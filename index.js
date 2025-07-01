document.querySelectorAll(".drum").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var e = this.innerHTML;

    switch (e) {
      case "w":
        new Audio("sounds/tom-1.mp3").play();
        break;
      case "a":
        new Audio("sounds/tom-2.mp3").play();
        break;
      case "s":
        new Audio("sounds/tom-3.mp3").play();
        break;
      case "d":
        new Audio("sounds/tom-4.mp3").play();
        break;
      case "j":
        new Audio("sounds/crash.mp3").play();
        break;
      case "k":
        new Audio("sounds/snare.mp3").play();
        break;
      case "l":
        new Audio("sounds/kick-bass.mp3").play();  // ✅ bass
        break;
      default:
        console.log("Unknown key: " + e);
    }
  });
});
document.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event);
    var e = event.key;

    switch (e) {
      case "w":
        new Audio("sounds/tom-1.mp3").play();
        break;
      case "a":
        new Audio("sounds/tom-2.mp3").play();
        break;
      case "s":
        new Audio("sounds/tom-3.mp3").play();
        break;
      case "d":
        new Audio("sounds/tom-4.mp3").play();
        break;
      case "j":
        new Audio("sounds/crash.mp3").play();
        break;
      case "k":
        new Audio("sounds/snare.mp3").play();
        break;
      case "l":
        new Audio("sounds/kick-bass.mp3").play();  // ✅ bass
        break;
      default:
        console.log("Unknown key: " + e);
    }
});
