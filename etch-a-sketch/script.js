// makes the red button change the hover color to red and overrides the black squares
var redButton = document.getElementById('redPicker');
redButton.addEventListener('click', function() {
  var squares = document.querySelectorAll('.defaultSquares');
  squares.forEach(function(eachBlock) {
    eachBlock.addEventListener('mouseover', function(event) {
      event.target.classList.remove('blackSquares');
        event.target.classList.remove('blueSquares');
        event.target.classList.add('redSquares');
    });
  });
});
// makes the blue button change the hover color to blue and overrides the black squares
var blueButton = document.getElementById('bluePicker');
blueButton.addEventListener('click', function() {
  var squares = document.querySelectorAll('.defaultSquares');
  squares.forEach(function(eachBlock) {
    eachBlock.addEventListener('mouseover', function(event) {
      event.target.classList.remove('blackSquares');
        event.target.classList.remove('redSquares');
        event.target.classList.add('blueSquares');
    });
  });
});
// makes the black button change the hover color to blue and overrides the black squares
var blackButton = document.getElementById('blackPicker');
blackButton.addEventListener('click', function() {
  var squares = document.querySelectorAll('.defaultSquares');
  squares.forEach(function(eachBlock) {
    eachBlock.addEventListener('mouseover', function(event) {
      event.target.classList.remove('redSquares');
        event.target.classList.remove('blueSquares');
        event.target.classList.add('blackSquares');
    });
  });
});


for (i=0; i<600; i++) {
  var j = document.createElement('div')
  j.classList.add('defaultSquares');
  document.getElementById('drawingBoard').appendChild(j);
};

var squares = document.querySelectorAll('.defaultSquares');
squares.forEach(function(eachBlock) {
  eachBlock.addEventListener('mouseover', function(event) {
    event.target.classList.add('blackSquares');
  });
});

var resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function(item) {
  var fullSquares = document.querySelectorAll('.defaultSquares');
  fullSquares.forEach(function(eachBlock) {
      eachBlock.classList.remove('blackSquares');
      eachBlock.classList.remove('redSquares');
      eachBlock.classList.remove('blueSquares');
});
});
