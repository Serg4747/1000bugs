let deadline = '2019-06-01';

function getTimeRemainig(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()),
  seconds = Math.floor((t/1000) % 60),
  minutes = Math.floor((t/1000/60) % 60),
  hours = Math.floor((t/1000/60/60) % 24),
  days = Math.floor(t/(1000*60*60*24));
  return{
    'total' : t,
    'days' : days,
    'hours' : hours,
    'minutes' : minutes,
    'seconds' : seconds
  };
}

function setClock(id, endtime) {
  let timer = document.getElementById(id),
      days = timer.querySelector('.days'),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock,1000);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
      function updateClock() {
        let t = getTimeRemainig(endtime);
        if(t.days < 10 ){days.textContent = '0'+ t.days;}
        else{days.textContent = t.days;}
        if(t.hours < 10 ){hours.textContent = '0'+ t.hours;}
        else{hours.textContent = t.hours;}
        if(t.minutes < 10 ){minutes.textContent = '0'+ t.minutes;}
        else{minutes.textContent = t.minutes;}
        if(t.seconds < 10 ){seconds.textContent = '0'+ t.seconds;}
        else{seconds.textContent = t.seconds;}
        // hours.textContent = t.hours;
        // minutes.textContent = t.minutes;
        // seconds.textContent = t.seconds;
      }

}

setClock('timer', deadline);