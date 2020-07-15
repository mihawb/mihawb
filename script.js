const moon = document.getElementById("moon");
const mountain = document.getElementById("mountain");
const text = document.getElementById("text");

const navigation = document.querySelector(".navigation")
const hamburger = document.querySelector(".hamburger");

const handleScroll = () => {
    let scrollValue = window.scrollY;

    moon.style.left = -scrollValue * 0.15 + "px";
    mountain.style.top = -scrollValue * 0.25 + "px";
    text.style.top = scrollValue + "px";
}

const handleClickBurger = () => {
    hamburger.classList.toggle("hamburger--active");
    navigation.classList.toggle("navigation--active");
}

window.addEventListener("scroll", handleScroll);
hamburger.addEventListener("click", handleClickBurger);