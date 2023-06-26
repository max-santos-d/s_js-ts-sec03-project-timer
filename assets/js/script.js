const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let seconds = 0;  
let timer;

function createNewTimeSeconds(seconds) {
  const date = new Date(seconds * 1000 );
  return date.toLocaleTimeString('pt-BR', {
    hour12: false, 
    timeZone: 'UTC'
  });
}

function startClock() {
  timer = setInterval(() => {
    seconds++;
    clock.innerHTML = createNewTimeSeconds(seconds);
  }, 1000);
}

start.addEventListener('click', function (event) {
  clock.classList.remove('paused');
  clearInterval(timer);
  startClock();
});

pause.addEventListener('click', function (event) {
  if(seconds > 0) clock.classList.add('paused');
  clearInterval(timer);
});

reset.addEventListener('click', function (event) {
  clock.classList.remove('paused');
  clearInterval(timer);
  clock.innerHTML = '00:00:00';
  seconds = 0;
});