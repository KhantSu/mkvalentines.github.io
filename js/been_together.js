const myDate = "2018-9-9";

//count days
const oldDate = new Date(myDate);
const newDate = new Date();

const dateDiff = Math.abs(newDate.getTime() - oldDate.getTime());
const days = Math.ceil(dateDiff / (1000 * 3600 * 24));

$(".days").html(days + " Days");

//count seconds

setInterval(() => {
  const sOldDate = new Date(myDate);
  const sNewDate = new Date();
  const secondDiff = (sNewDate.getTime() - sOldDate.getTime()) / 1000;
  const seconds = Math.ceil(secondDiff);
  document.querySelector(".seconds").innerHTML = seconds + " Seconds";
}, 1000);
