var colors = generateRandomColors(6);
var squares = document.getElementsByClassName('square');
var pickedColor = pickedColor();
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function(){
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new reandom color from array
  pickedColor = pickedColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i <squares.length; i++){
    squares[i].style.background = colors[i];
  }
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  // Add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // Add click listeners to squares
  squares[i].addEventListener('click', function(){
    // Grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // Compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = 'Correct';
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again'
    }
  });
}

function changeColors(color){
  // Loop through all squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  // Change each color to match given color
}

function pickedColor(){
  var random =  Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = []
  //add num random colors to arr
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a 'red' from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a 'green' from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a 'blue' from 0 - 255
  var b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'; 
}