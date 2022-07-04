const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "b83ed15ccb37103684580e554a83d20c";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        console.log(data.name, data.weather[0].main);
    });
    
}

function onGeoError(){
    alert("Can't find you. No Weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)