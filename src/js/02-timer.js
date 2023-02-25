import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  text: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start'),
  spanDay: document.querySelector('span[ data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSeconds: document.querySelector('span[data-seconds]'),
  timer: document.querySelector('.timer'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
       Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

refs.startBtn.addEventListener('click', restOfTheTime);

function restOfTheTime() {
 let timerEl = setInterval(() => {
    let countdown = new Date(refs.text.value) - new Date();

    refs.startBtn.disabled = true;

    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      refs.spanDay.textContent = timeObject.days;
      refs.spanHours.textContent = timeObject.hours;
      refs.spanMinutes.textContent = timeObject.minutes;
        refs.spanSeconds.textContent = timeObject.seconds;
        
        updeteTimerText(timeObject);
    } else {
      clearInterval(timerEl);
      }
      
  }, 1000);
}

function updeteTimerText({ days, hours, minutes, seconds }) {
    refs.timer.textContent = `${days}:${hours}:${minutes}:${seconds}`
}