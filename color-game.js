let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let selectedColor = document.querySelector("#selectedColor");
let messageDisplay = document.querySelector("#message");
let title = document.querySelector("h1");
let header = document.querySelector("#header");
let resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function setUpSquares(){
    for(let i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                messageDisplay.style.color = "red";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                title.style.backgroundColor = clickedColor;
                header.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}


function reset(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change selectedColor to match picked color
    selectedColor.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    messageDisplay.style.color = "black";
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        // add colors to squares
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    title.style.backgroundColor = "rgb(75, 125, 175)";
    header.style.backgroundColor = "rgb(75, 125, 175)";
}



resetButton.addEventListener("click", function(){
   reset();
});




// change all square colors to match the wanted color

function changeColors(color) {
    // loop through all squares
    for(let i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}


// picks ONE color from array with randomly generated colors

function pickColor() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber]
}


// generates SEVERAL random colors and pushes them to an array

function generateRandomColors(num) {
    // make an array
    let arr = [];
    // add num random colors to array
    for(let i = 0; i < num; i++) {
        // get random color an push into array
        arr.push(randomColor());
    }
    // return array
    return arr;
}


// generates ONE random RGB color

function randomColor() {
    // pick a "red" value from 0 - 255
    let redValue = Math.floor(Math.random() * 256);
    // pick a "green" value from 0 - 255
    let greenValue = Math.floor(Math.random() * 256);
    // pick a "blue" value from 0 - 255
    let blueValue = Math.floor(Math.random() * 256);

    return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}