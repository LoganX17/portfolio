$("#save").on("click",function() {
  alert("Form Submitted!");
});


/* CODIO SOLUTION BEGIN*/
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
body.classList.toggle('dark-mode');

const modeMessage = body.classList.contains('dark-mode') ?
    'Dark'
    : "Light"

modeStatus.innerText = " " + modeMessage;
  }

modeToggle.addEventListener('click', toggleMode);

// WRITE YOUR CODE HERE
const images = document.querySelectorAll("img");
let index = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const active = "active" 
function showImg(i){
    images.forEach(image => image.classList.remove(active))
    images[i].classList.add(active)
}
next.addEventListener("click", function(){
  index = (index + 1) % images.length
   showImg(index);
   pause();
   })
prev.addEventListener("click", function(){
   index = (index + images.length - 1) % images.length
    showImg(index);
    pause();
    })
    showImg(index);
const buffer = 2000; // 2000 = 2 seconds
// Date.now() gets the current time in miliseconds
let current = Date.now();
// the target is some time in the future, in this case 5 seconds from now
let target = current + buffer;

// Functions
function timeLoop(){
  // this loop updates the current time
  // and checks if it's after the target time
  current = Date.now();
  if(current > target){
    // if it's after the target
    // then increment the index,
    // show the image
    // and set a new future target
    index = (index + 1) % images.length
    showImg(index);
    target = current + buffer;
  }
}

function pause(){
  // update current and target
  // this is like a reset on the current timer
  current = Date.now();
  target = current + buffer;
}


// setInterval is a function that is called constantly with a delay
// in this case it will call my timeLoop function every 100 miliseconds
// this is often enough that a user won't notice the delay, but infrequent enough to not cause the application to get stuck just doing this
setInterval(timeLoop, 100);



