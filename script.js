const bg = document.getElementById("bg");
const moon = document.getElementById("moon");
const mountain = document.getElementById("mountain");
const road = document.getElementById("road");
const text = document.getElementById("text");

window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;

    moon.style.left = -scrollValue * 0.15 + "px";
    mountain.style.top = -scrollValue * 0.25 + "px";
    text.style.top = scrollValue + "px";
})