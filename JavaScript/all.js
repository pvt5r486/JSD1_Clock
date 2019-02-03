function clock() {
  const hourPoint = document.querySelector('.hour-hand');
  const minPoint = document.querySelector('.minute-hand');
  const secPoint = document.querySelector('.second-hand');
  let angleArray = getAngle();
  // 歸 0 校正 + 當前角度
  secPoint.style.transform = `translateX(-50%) rotate(${180 + angleArray[0]}deg)`;
  minPoint.style.transform = `translateX(-50%) rotate(${angleArray[1]}deg)`;
  hourPoint.style.transform = `translateY(-50%) rotate(${-90 + angleArray[2]}deg)`;
}

function getAngle() {
  const date = new Date();
  const SecBlock = 360 / 60;
  const MinBlock = 360 / 60;
  const HourBlock = 360 / 12;
  // 當前秒針度數 = 秒針每格角度 * 當前秒數
  const SecAngle = SecBlock * date.getSeconds();
  const MinAngle = MinBlock * date.getMinutes();
  // 當前時針度數 = 時針每大格角度 * 當前時數 + 偏移值(每12分移動6度)
  const HourAngle = HourBlock * date.getHours() + (date.getMinutes() / 12 * 6);
  return [SecAngle, MinAngle , HourAngle];
}

setInterval(clock,1000);


