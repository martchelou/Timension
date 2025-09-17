const secondsElement = document.querySelector('.seconds');
const minutesElement = document.querySelector('.minutes');
const hoursElement = document.querySelector('.hours');
const timeElement = document.querySelector('.time');
const setRotation = (element, rotation) => element.style.transform = `rotate(${rotation}deg)`;
const updateWatch = () =>
{
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsRotation = (seconds * 6);
    const minutesRotation = (minutes * 6) + (seconds * 0.1);
    const hoursRotation = (hours * 30) + (minutes * 0.5);
    setRotation(secondsElement, secondsRotation);
    setRotation(minutesElement, minutesRotation);
    setRotation(hoursElement, hoursRotation);
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    // const formattedSeconds = String(seconds).padStart(2, '0');
    timeElement.textContent = `${formattedHours}:${formattedMinutes}`;// :${formattedSeconds}
}
setInterval(updateWatch, 1000);
updateWatch();