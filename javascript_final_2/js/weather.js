const API_KEY ='b7ce08e35ea5da8d8379452e749c0deb';

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response=>response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child")
        const city= document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}
function onGeoError(){
    alert("Can't find you. No weather for you.");}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

