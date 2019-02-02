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
  // 每格秒針度數 = 360 度 / 60秒 * 當前秒數
  const SecAngle = 360 / 60 * date.getSeconds();
  const MinAngle = 360 / 60 * date.getMinutes();
  const HourAngle = 360 / 12 * date.getHours();
  return [SecAngle, MinAngle , HourAngle];
}

setInterval(clock,1000);

