document.addEventListener("keydown", function (event) {
    let keyPressed = event.key;
    switch (keyPressed) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare1 = new Audio("./sounds/snare.mp3");
            snare1.play();
            break;
        case "k":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var crash1 = new Audio("./sounds/crash.mp3");
            crash1.play();
            break;
        default:
            console.log(keyPressed);
    }
    buttonAnimation(keyPressed);
    function buttonAnimation(currentKey) {
        let activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
})

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare1 = new Audio("./sounds/snare.mp3");
                snare1.play();
                break;
            case "k":
                var kickBass = new Audio("./sounds/kick-bass.mp3");
                kickBass.play();
                break;
            case "l":
                var crash1 = new Audio("./sounds/crash.mp3");
                crash1.play();
                break;
            default:
                console.log(buttonInnerHTML);
        }
        buttonAnimation(buttonInnerHTML);
        function buttonAnimation(currentKey) {
            let activeButton = document.querySelector("." + currentKey);
            activeButton.classList.add("pressed");
            setTimeout(function () {
                activeButton.classList.remove("pressed");
            }, 100);
        }   
    })
}