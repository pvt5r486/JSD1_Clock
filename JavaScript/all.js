function clock() {
  const hourPoint = document.querySelector('.hour-hand');
  const minPoint = document.querySelector('.minute-hand');
  const secPoint = document.querySelector('.second-hand');
  let angleArray = getAngle();
  secPoint.style.transform = `translateX(-50%) rotate(${180 + angleArray[0]}deg)`;
  minPoint.style.transform = `translateX(-50%) rotate(${angleArray[1]}deg)`;
  hourPoint.style.transform = `translateY(-50%) rotate(${-90 + angleArray[2]}deg)`;
}

function getAngle() {
  const date = new Date();
  // 每格秒針度數 = 當前秒數 / 60秒 * 360度
  const SecAngle = Math.floor(date.getSeconds() / 60 * 360);
  const MinAngle = Math.floor(date.getMinutes() / 60 * 360);
  const HourAngle = Math.floor(date.getHours() / 12 * 360);
  return [SecAngle, MinAngle , HourAngle];
}

setInterval(clock,1000);

