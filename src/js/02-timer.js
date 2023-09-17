import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const sM = document.querySelector(".timer");
console.log(sM)

const inputText = document.querySelector("input#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysH = document.querySelector("span[data-days]");
const hoursH = document.querySelector("span[data-hours]");
const minutesH = document.querySelector("span[data-minutes]");
const secondsH = document.querySelector("span[data-seconds]");

startBtn.setAttribute('disabled', "");


 const datePicker = flatpickr(inputText, {
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
        startBtn.removeAttribute('disabled', "");
      }
    },
  }
  );

  
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

   const intervalId =  setInterval(() => {
  
    const choosedData = datePicker.selectedDates[0];
    const dateNow = new Date();
    const differentTime = (choosedData - dateNow);
    const resulConvertMs = res(differentTime);

    
    
    
    daysH.textContent = addLeadingZero(resulConvertMs.differentDay);
    hoursH.textContent = addLeadingZero(resulConvertMs.differentHour);
    minutesH.textContent = addLeadingZero(resulConvertMs.differentMinutes);
    secondsH.textContent = addLeadingZero(resulConvertMs.differentSeconds);
    if(daysH.textContent === '00' && hoursH.textContent === '00' && minutesH.textContent === '00' && secondsH.textContent === '00') {
      clearInterval(intervalId);
      sM.insertAdjacentHTML("afterend", `
      <div class="smail">ох і завдання у вас...</div>
      <img src="/src/зображення_viber_2023-09-09_00-31-07-696.jpg" alt="Cat" width="500" height="540">
      `)
      console.log("Ура!!!")
    }

    
    
   }, 1000)
    

 
  };

  
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  };
  