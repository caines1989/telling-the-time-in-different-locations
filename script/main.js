const hourHand = document.querySelectorAll('[data-hour-hand]')
const minuteHand = document.querySelectorAll('[data-minute-hand]')
const secondHand = document.querySelectorAll('[data-second-hand]')

console.log(hourHand)


function setgmtclock(index) {
  const currentDate = new Date()
  const secondsRatio = (currentDate.getSeconds()) / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand[index], secondsRatio)
  setRotation(minuteHand[index], minutesRatio)
  setRotation(hourHand[index], hoursRatio)
}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

const timeZones = ['gmt', 'cet', 'est', 'jst'];
timeZones.forEach((item, index) => {
  setgmtclock(index);
  setInterval(() => setgmtclock(index), 1000);
});