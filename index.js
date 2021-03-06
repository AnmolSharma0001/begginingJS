function playsounds(st) {
    switch (st) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("Press valid Key");
            break;

    }
}

function addanime(st) {
    document.querySelector("." + st).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + st).classList.remove("pressed");
    }, 100)
}

for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninhtml = this.innerHTML;
        playsounds(buttoninhtml);
        addanime(buttoninhtml);
    });
}

document.addEventListener("keydown", function (event) {
    //console.log(event);
    playsounds(event.key);
    addanime(event.key);
})