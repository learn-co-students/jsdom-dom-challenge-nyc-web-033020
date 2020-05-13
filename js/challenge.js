document.addEventListener('DOMContentLoaded', function(e) {
  let counter = document.getElementById('counter');
  console.log('pauseResumeButtonHasBeenClicked line 3', pauseResumeButtonHasBeenClicked);

  let plus = document.getElementById('plus');
  plus.addEventListener('click', function(e) {
    if (pauseResumeButtonHasBeenClicked == false) { 
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
  let pauseResumeButton = document.getElementById('pause');
  pauseResumeButton.addEventListener('click', function(e) {
    console.log('pause button clicked'); 
    
    if (pauseResumeButtonHasBeenClicked == false) {
      clearInterval(timerIncrementEverySecond);
      pauseResumeButtonHasBeenClicked = true;
      pauseResumeButton.innerText = "resume";

    } else if (pauseResumeButtonHasBeenClicked == true){
      timerIncrementEverySecond = window.setInterval(function() {
        let newValue = parseInt(counter.innerText) + 1;
        counter.innerText = newValue;
      }, 1000);
      pauseResumeButtonHasBeenClicked = false;
      pauseResumeButton.innerText = "pause";
    }

    console.log("pauseResumeButtonHasBeenClicked status: ", pauseResumeButtonHasBeenClicked)
  });
});

// helps keep track of whether or not the pause button has been clicked
let pauseResumeButtonHasBeenClicked = false;

// callback to respond to a click of the minus button
let minusCallback = function(e) {
  if (pauseResumeButtonHasBeenClicked == false) {
    let newValue = parseInt(counter.innerText) - 1;
    counter.innerText = newValue;
  }
}

// callback to respond to click of heart button
let heartCallback = function(e) {
  if (pauseResumeButtonHasBeenClicked == false) {
    let likes = document.getElementsByClassName('likes')[0];
    let likesLi = document.createElement('li');
    likesLi.innerText = `${counter.innerText} has been liked`;
    likes.append(likesLi);
    // TODO: I should see count of the number of 'likes' associated with that number.
  }
};