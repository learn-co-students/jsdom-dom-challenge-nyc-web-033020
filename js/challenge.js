document.addEventListener('DOMContentLoaded', function(e) {
  let counter = document.getElementById('counter');
  console.log('pauseButtonHasBeenClicked line 3', pauseButtonHasBeenClicked);

  let plus = document.getElementById('plus');
  plus.addEventListener('click', function(e) {
    if (pauseButtonHasBeenClicked == false) { 
      // if our global var is true, don't do anything
      // if it is false, the button should do something
      let newValue = parseInt(counter.innerText) + 1;
      counter.innerText = newValue;
    }
  });

  let minus = document.getElementById('minus');
  minus.addEventListener('click', minusCallback);

  let timerIncrementEverySecond = window.setInterval(function() {
    let newValue = parseInt(counter.innerText) + 1;
    counter.innerText = newValue;
  }, 1000);


  // Liking a number
  let heart = document.getElementById('heart');
  heart.addEventListener('click', heartCallback);

  // Pause the counter
  let pauseButton = document.getElementById('pause');
  pauseButton.addEventListener('click', function(e) {
    clearInterval(timerIncrementEverySecond);
    pauseButtonHasBeenClicked = true; 
    console.log('pauseButtonHasBeenClicked pausebutton clicked', pauseButtonHasBeenClicked);

    // cancel button clicking ability
  });
});

// helps keep track of whether or not the pause button has been clicked
let pauseButtonHasBeenClicked = false;


let minusCallback = function(e) {
  if (pauseButtonHasBeenClicked == false) {
    let newValue = parseInt(counter.innerText) - 1;
    counter.innerText = newValue;
  }
}

let heartCallback = function(e) {
  if (pauseButtonHasBeenClicked == false) {
    let likes = document.getElementsByClassName('likes')[0];
    let likesLi = document.createElement('li');
    likesLi.innerText = `${counter.innerText} has been liked`;
    likes.append(likesLi);
    // TODO: I should see count of the number of 'likes' associated with that number.
  }
};