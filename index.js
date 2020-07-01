/* SCIAGANIE OBIEKTU JSON Z URL ZA POMOCA FUNKCJI ASYNCHRONICZNEJ
async function load() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=Lodz&appid=b1308074081cd4b5bb33c1c656c895ec&units=metric';
    let obj = await (await fetch(url)).json();
    console.log(obj);
}
load();*/

var pogObj = null;
var currentCity = null;

async function zmienMiasto() {
    let miasto = document.getElementById("inputMiasto").value;
    
    if (currentCity != miasto) {
        currentCity = miasto;
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + miasto + '&appid=b1308074081cd4b5bb33c1c656c895ec&units=metric';
        pogObj = await (await fetch(url)).json();
        console.log(pogObj);
        zmienTytul(miasto)
    }
}

function zmienTytul(nazwa) {
    switch (nazwa) {
        case "Lodz":
            document.getElementById("pogodaTytul").innerHTML = "Pogoda w Łodzi:"
            break;
        case "Warsaw":
            document.getElementById("pogodaTytul").innerHTML = "Pogoda w Warszawie:"
            break;
        case "Gdansk":
            document.getElementById("pogodaTytul").innerHTML = "Pogoda w Gdańsku:"
            break;
        case "Wroclaw":
            document.getElementById("pogodaTytul").innerHTML = "Pogoda we Wrocławiu:"
            break;
        case "Krakow":
            document.getElementById("pogodaTytul").innerHTML = "Pogoda w Krakowie:"
            break;
    }
}