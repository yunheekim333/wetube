// const weather = document.querySelector("#weather span:first-child"); 
// const city = document.querySelector("#weather span:last-child"); 
// const API_KEY ="50b8b6584775e0c5f78f0aaa3ded62a3";
// function onGeoOk(posion){
//     const lat = posion.coords.latitude;
//     const lon = posion.coords.longitude;
//     console.log("you live it", lat, lon);
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}$units=metric`;
//     console.log(url);
//     fetch(url) //콘솔에서 네트워크 눌러볼것
//         .then((response) => response.json())
//         .then((data) => {
//            // console.log(data.name, data.weather[0].main);
//            //html 에 추가

//            const name= data.name;
//            //const weather = data.weather[0].main
//            city.innerText = data.name; 
//            weather.innerText = '${data.weahter[0].main} / ${data.main.temp}';

//         })
//     }

// function onGeoError() {
//     alert (" can't find you");
// }

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 

// -----------------

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "50b8b6584775e0c5f78f0aaa3ded62a3";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        
      const name= data.name;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);