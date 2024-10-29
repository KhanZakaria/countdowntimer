let showDay = document.querySelector(".day");
let showHour = document.querySelector(".hour");
let showMinute = document.querySelector(".minute");
let showSecond = document.querySelector(".second");

let counter = setInterval(() => {
  let setTime = new Date("oct 30 2024  11:47:00 PM").getTime();

  let currentTime = new Date().getTime();

  let countTime = setTime - currentTime; // milisecond

  let days = Math.floor(countTime / (60 * 60 * 24 * 1000));

  let hour = Math.floor((countTime % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));

  let minute = Math.floor((countTime % (60 * 60 * 1000)) / (60 * 1000));

  let second = Math.floor((countTime % (60 * 1000)) / 1000);

  if (days <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
    clearInterval(counter);
  }

  showDay.innerHTML = days;
  showHour.innerHTML = hour;
  showMinute.innerHTML = minute;
  showSecond.innerHTML = second;
}, 1000);
