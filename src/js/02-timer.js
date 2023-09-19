import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import img from '/src/img/Cat.jpg';

const sM = document.querySelector(".timer");


const inputText = document.querySelector("input#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysH = document.querySelector("span[data-days]");
const hoursH = document.querySelector("span[data-hours]");
const minutesH = document.querySelector("span[data-minutes]");
const secondsH = document.querySelector("span[data-seconds]");

startBtn.setAttribute('disabled', "");
// inputText.setAttribute('disabled', "true");


startBtn.insertAdjacentHTML("afterend", `<button type="button" hidden data-start>Змінити дату</button>`)

 const datePicker = flatpickr(inputText, {
  // element: {
  //   hidden: true,
  // },
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      selectedDates = selectedDates[0]

      if (selectedDates <= new Date()) {
        window.alert("Please choose a date in the future")
      } else {
        startBtn.removeAttribute('disabled', "")
      }
    },
  
  }
  );
 
// console.log(datePicker.config.noCalendar)
// console.log(datePicker.element)


  startBtn.addEventListener("click", countdown);

  const res = function convertMs(differentTime) {
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const differentDay = Math.floor(differentTime / day);
    const differentHour = Math.floor((differentTime % day) / hour);
    const differentMinutes = Math.floor(((differentTime % day) % hour) / minute);
    const differentSeconds = Math.floor((((differentTime % day) % hour) % minute) / second);
  
    return { differentDay, differentHour, differentMinutes, differentSeconds };
  }
    function countdown() {
      
      startBtn.setAttribute('disabled', "");

        startBtn.insertAdjacentHTML("afterend", `<button type="button" class="active" data-start>Змінити дату</button>`)
        const buttonChangeDate = document.querySelector(".active");
        buttonChangeDate.addEventListener("click",   () => {
          startBtn.removeAttribute('disabled', "");
          buttonChangeDate.setAttribute('hidden', "");
          window.alert("Воно вам треба?")
          location.reload()
        })
       
       const intervalId = setInterval(() => {
    const choosedData = datePicker.selectedDates[0];
    const dateNow = new Date();
    const differentTime = (choosedData - dateNow);
    const resulConvertMs = res(differentTime);

    daysH.textContent = addLeadingZero(resulConvertMs.differentDay);
    hoursH.textContent = addLeadingZero(resulConvertMs.differentHour);
    minutesH.textContent = addLeadingZero(resulConvertMs.differentMinutes);
    secondsH.textContent = addLeadingZero(resulConvertMs.differentSeconds);

    if(differentTime < 1000){
    
      console.log("Котик внизу!!)))")
      console.log(img)
      clearInterval(intervalId);
      sM.insertAdjacentHTML("afterend", `
      <div class="smail">ох і завдання у вас...</div>
      <img src="${img}" alt="Cat" width="500" height="540">
      `)
      buttonChangeDate.setAttribute('hidden', "");
    }
    
   }, 1000)
  
  };

  
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  };


 