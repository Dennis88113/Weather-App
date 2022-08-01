
import {updateTime} from '/modules/variable.js';

const update = new Date();
let timeStamp = update.toLocaleString("ru-RU", {
  day:"numeric",
  month:"short",
  hour: "numeric",
  minute: "numeric",
  second:"numeric"
});

export function currentTime() {
    const today = new Date().toLocaleDateString("ru-RU", { weekday: "long" });
    updateTime.innerHTML = timeStamp;
  }
  
  export default currentTime