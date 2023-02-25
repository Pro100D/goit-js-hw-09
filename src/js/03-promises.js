import Notiflix from 'notiflix';

const refs = {
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  submitBtn: document.querySelector('button'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.submitBtn.addEventListener('click', event => {
  event.preventDefault();

  let ferstDeleyEl = Number(refs.delayInput.value);
  let stepEl = Number(refs.stepInput.value);
  let amountEl = refs.amountInput.value;

  for (let i = 0; i < amountEl; i += 1) {
    createPromise(1 + i, ferstDeleyEl + i * stepEl)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          console.log(`❌ Rejected promise ${position} in ${delay}ms`)
        );
      });
  }
});
