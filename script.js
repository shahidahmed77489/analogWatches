function analogWatch() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let showHour = document.getElementById("hour");
  let showMinute = document.getElementById("minute");
  let showSecond = document.getElementById("second");

  let hourKey = hours * 30 + minutes / 2;
  let minuteKey = minutes * 6;
  let secondKey = seconds * 6;

  showHour.style.transform = `rotate(${hourKey}deg)`;
  showMinute.style.transform = `rotate(${minuteKey}deg)`;
  showSecond.style.transform = `rotate(${secondKey}deg)`;
}
setInterval(() => {
  analogWatch();
}, 1000);

// let date = new Date();
// let day = date.toLocaleString("default", { weekday: "short" })();
// console.log(day);
// let data
var dateObj = new Date();
var weekday = dateObj.toLocaleString("default", { weekday: "short" });
let date = dateObj.getDate();

document.getElementById("dateArea").innerHTML = date;
document.getElementById("dateAreaa").innerHTML = weekday;
