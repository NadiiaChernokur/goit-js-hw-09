
const submitBtn = document.querySelector("button[type='submit']");

const amountInput = document.querySelector("input[name='amount']");
const stepInput = document.querySelector("input[name='step']");
const delayInput = document.querySelector("input[name='delay']");

const amountInputText = amountInput.textContent;
const delayInputText = delayInput.textContent;
const stepInputText = stepInput.textContent;

submitBtn.addEventListener("submit", onSubmit);

let i = 0;
let position = 0;

function onSubmit(e) {
  preventDefault(e);
  for (let i = 0; i <= amountInputText; i++) {
    position += i;
    function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
      } else {
        // Reject
      }
    }
  }
};



 createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
