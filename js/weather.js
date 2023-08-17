const API_kEY = "481e3cf815b46e17c5987262746c2fe6";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_kEY}`;
    console.log(url);
}

function onGeoError() {
    alert("Can't find your. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);