const startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")

startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);

let timerId = null;
stopBtn.disabled = true;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


function onStart() {
    stopBtn.disabled = false;
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
        startBtn.setAttribute('disabled', "");
         
    }, 1000) 
};

function onStop() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled', "");
     document.body.style.background = "white";
     stopBtn.disabled = true;
};
