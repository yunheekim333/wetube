const images = ["0.jpeg", "1.webp", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

 // console.log(chosenImage);
 // html 에 img=0.jpeg 하는 효과를 자바스크립트에서 만들어봄. js에서 생성해서 html에 사용하는 것처럼

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

 // console.log(bgImage);
document.body.appendChild(bgImage);


// //과제
// blueprint에 colors배열이 선언되어 있습니다.
// 사용자가 버튼을 클릭하면 colors배열에서 두 가지 색상이 랜덤으로 선택되어야 합니다.
// body태그의 style을 랜덤으로 선택된 두 가지 색상을 사용해 linear-gradient로 변경하세요.
// index.js 사용