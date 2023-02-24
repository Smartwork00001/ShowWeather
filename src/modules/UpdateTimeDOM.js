import { getTime } from "./DateAndTime";

const updateTime = () => {
    const timeDiv = document.querySelector(".time");
    timeDiv.textContent = getTime();
}

export default updateTime;