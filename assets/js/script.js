const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let seconds = 0;  

start.addEventListener('click', function (event) {
  startClock();
});

pause.addEventListener('click', function (event) {
  alert("pause");
});

reset.addEventListener('click', function (event) {
  alert("reset");
});

function createNewTimeSeconds(seconds) {
  const date = new Date(seconds * 1000 );
  return date.toLocaleTimeString('pt-BR', {
    hour12: false, 
    timeZone: 'UTC'
  });
}

function startClock() {
  return  setInterval(() => {
    seconds++;
    clock.innerHTML = createNewTimeSeconds(seconds);
  }, 1000);
}