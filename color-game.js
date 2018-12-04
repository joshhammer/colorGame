
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();
let squares = document.querySelectorAll(".square");
let messageDisplay = document.querySelector("#message");
let selectedColor = document.querySelector("#selectedColor");
let title = document.querySelector("h1");
let header = document.querySelector("#header");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


// Easy mode

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected")
    title.style.backgroundColor = "rgb(75, 125, 175)";
    header.style.backgroundColor = "rgb(75, 125, 175)";
    // generate only 3 random colors
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    // select new pickedColor
    pickedColor = pickColor();
    // change display of pickedColor
    selectedColor.textContent = pickedColor;
    // loop through all squares, then change color of first three, hide last three
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none"
        }
    }

});

// Hard mode

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected")
    title.style.backgroundColor = "rgb(75, 125, 175)";
    header.style.backgroundColor = "rgb(75, 125, 175)";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    selectedColor.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

// Reset function

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change selectedColor to match picked color
    selectedColor.textContent = pickedColor;
    // change colors of squares
    for(let i = 0; i < squares.length; i++) {
        // add colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    title.style.backgroundColor = "rgb(75, 125, 175)";
    header.style.backgroundColor = "rgb(75, 125, 175)";
    resetButton.textContent = "New Game";
    messageDisplay.textContent = "";
});

selectedColor.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    // add colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
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