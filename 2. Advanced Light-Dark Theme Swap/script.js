const themeButton = document.querySelector(".toggle-theme-btn");
const sunMoon = document.querySelector(".sun-moon")

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const currentRotation = parseInt(getComputedStyle(sunMoon).getPropertyValue('--rotation'))
    sunMoon.style.setProperty('--rotation', currentRotation + 180)
});