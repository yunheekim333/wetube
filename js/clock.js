// const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log("hello");
// }

// setInterval(sayHello, 5000);

// //x ms초마다 function 실행 5000>5초
//setTimeout(sayhello, 5000)
//콘솔에서  const date=new Date() 
//date.getDay()... 등등등 

// 10초 이하의 시간에서 x아닌 0x로 나오길 바람/ 콘솔에서
//"1".padStart(2,"0") 
//뒤에 넣기
//"1".padEnd(2,"0")


// //과제

// const clockTitle = document.querySelector(".js-clock");

// const clock = document.querySelector("h2#js-clock");

// function getTime() {
//   const xmasDay = new Date(`${new Date().getFullYear()}-12-24:00:00:00+0900`);
//   const now = new Date();
//   // This is in milisecondsx
//   const difference = new Date(xmasDay - now);
//   const secondsInMs = Math.floor(difference / 1000);
//   const minutesInMs = Math.floor(secondsInMs / 60);
//   const hoursInMs = Math.floor(minutesInMs / 60);
//   const days = Math.floor(hoursInMs / 24);
//   const seconds = secondsInMs % 60;
//   const minutes = minutesInMs % 60;
//   const hours = hoursInMs % 24;
//   const daysStr = `${days < 10 ? `0${days}` : days}d`;
//   const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
//   const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
//   const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
//   clock.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
// }


//     getTime();
//     setInterval(getTime, 1000);

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
