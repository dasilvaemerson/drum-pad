const keys = document.querySelectorAll(".key");

function playSound(ev) { //ev ist the click event
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
    audio.currentTime = 0; //rewind to the start so the audio does not have to finish to be played again
    audio.play();
    key.classList.add("pressed"); //changes the color of the played key
    setTimeout(function() {
        key.classList.remove("pressed");
      }, 100);
  }
  
window.addEventListener("keydown", playSound);