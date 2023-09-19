
const submitBtn = document.querySelector(".form");

submitBtn.addEventListener("submit", onSubmit);


function onSubmit(e) {
  e.preventDefault();

  let form = e.currentTarget;
  let delay = +(form.delay.value);
  let amount = +(form.amount.value);
  let step = +(form.step.value);
  if(step < 0 || delay < 0 || amount <= 0) {
    window.alert("Число має бути більше 0")
    return
  }
 
  for (let position = 1; position <= amount; position ++) {
    
    createPromise(position, delay)
  .then(( {position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    submitBtn.insertAdjacentHTML("afterend", `<div class="promis">Fulfilled promise ${position} in ${delay}ms</div>`)
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    submitBtn.insertAdjacentHTML("afterend", `<div class="promis-rej">Rejected promise ${position} in ${delay}ms</div>`)
  });
  delay += step
  }
 
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
    return new Promise ((resolve, reject) => {
      setTimeout (() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // submitBtn.insertAdjacentHTML("afterend", `<div class="promis"> Resalt promise ${position} in ${delay} ms</div>`)
       } else {
         reject({ position, delay });
        //  submitBtn.insertAdjacentHTML("afterend", `<div class="promis"> falsch promise ${position} in ${delay} ms</div>`)
       }
      //  submitBtn.insertAdjacentHTML("afterend", `<div class="promis"> Resalt promise ${position} in ${delay} ms</div>`)
     }, delay)
  })

  };

