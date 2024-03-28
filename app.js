const clock = () => {
  let date = new Date;
  let hour = date.getHours();
  let minute = date.getMinutes();
  let amPm = '';

  hour < 12 ? amPm = 'AM' : amPm = 'PM'
  if(hour > 12){
    hour -= 12
  }

  let padHour = String(hour).padStart(2, '0')
  let padMinute = String(minute).padStart(2, '0')
  time.textContent = `${padHour}:${padMinute} ${amPm}`
  requestAnimationFrame(clock)
}
clock()
