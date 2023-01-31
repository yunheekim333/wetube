// Day2.#2. (앞 수업은 단순 설명)
// log 는 괄호 안에 내용 출력, 그냥 쓰거나 "", '' 쓰면 됨
// console.log(43434);
// console.log("aaaaa");
// console.log('aaaa');

// console.log(5+2);

// // 숫자 변경하고 싶음, variable 변수 지정, 변수는 스페이스 안됨
// const a=5;
// const b=2;

// console.log(a+2);
// console.log(a*2);
// console.log(a/2);

// const myName="nico";

// console.log("hello" + myName);

// #2.4

// const amIFat="true"; 텍스트로 인식
// const amIFat="flase";

// const amIFat=true;

// const amIFat=false;

// const amIFat=null;
// let something; // 변수이나 값이 들어가지 않음. undefined상태, null : nothing, 
// console.log(amIFat, something);


//#2.5

// const playerName="nico";
// const palyerPoints=121212;
// const playerHandsome=ture;
// const palyerFat="little bit";

// player.name 
// palyer.points 
// --- 변수값으리 특성이 player의 특성임이 보임

// // object 생성, 중괄호 사용

// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,  
// };

// console.log(player);
// player.fat=false; //중간에 저장 가증
// player.points = player.points+15;
// console.log(player.points);

// Day 3
// function 반복해서 동작, 펑션안에 ()에 값을 태워 보내는 ㅓㄱ임

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();
// sayHello();
// sayHello();
// // sayHello();
// sayHello("lin"); //hello 출력

// #2.9 REcap
//const 는 값을 업데ㅣ트하지 못함
// let 은 없데이트 가능

// const a=5;
// const isNicoFat = true;
// console.log(isNicoFat);
// isNicoFat = false; //여기서 에러 발생
// console.log(isNicoFat);
// // var 는 왠만하면 쓰지말자, const, let 구분이 불가능

// const a=5;
// let isNicoFat = true;
// console.log(isNicoFat);
// isNicoFat = false;
// console.log(isNicoFat);

//array 만들기

// const me = "sexy";
// const days =[1,2, false, true, null, undefined, "test", me];

// const toBuy=["potato", "pizza", "toatao"];

// console.log(toBuy[2]);
// toBuy[2]="water";  //단일변수일때는 값의 업데이트가 불가능햇지만 오브젝트형, 배열일땐 가능
// console.log(toBuy[2]);
// toBuy.push("one"); //array 추가 기능 
// console.log(toBuy);


//2.1 Recap2

// const days=["mon", "tue",]
// >> 문제는 의미가 있는 proerty 저장할때 발생함

// const player = {
//     name: "nico",
//     age: 98,
// };


// console.log(player, console);
// consle 의 속성값이 없기 대문에 player 만 출력하고 괄호안에 console은 에러 발생, 대신 아래와 같이 출력 가능

// console.log(player.name);

// 안에 내용을 update 하는 것도 가능
// console.log(player);
// console.log(player.name="kim");
// console.log(player);
// player.sexy= "soon";
// console.log(player);

// function plus() {
//     console.log(2+3);
// }
// //아레와 같이 해야 호출, 출력됨
// plus();


// 펑션안에 데이터를 넣는것 보다 밖에서 넣도록 해보자
//alert 는 자바스크립트에서 이전에 만들어놓은 펑션

// alert("lalalalalal");

// function plus(potato, salad) {
//     console.log(potato + salad);
// }

// plus(5,10);

// 펑션안에 받으려는 변수 갯수와 출력하는 갯수가 동일하지 않아도 관계 없다. 펑션 정의대로 간다
// potato 변수는 펑션 안에서만 동작한다.
// function minusFive(potato) {
//     console.log(potato -5);
// }

// minusFive(5,10, 12, 34,1);
 
// const calculater = {
//     add: function (a, b) {
//         console.log(a+b);
//     },
// };

// calculater.add(5, 1);

// --과제
// 1+1
// 1-1
// a+b
// a-b
// a/b
// a**b
// ;
// 마지막 호출은 아래와 같이 되게
// calculator.add(1,2) ;
// calculater.minus ;
// --

//참고 // player 라는 ojbect에서 
// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,  
// };

// console.log(player);
// player.fat=false; //중간에 저장 가증
// player.points = player.points+15;
// console.log(player.points);

// const 변수 선언은 단일 변수 선언도 가능하지만
// 1. 변수 선언 - 중간에 값 변경 불가
// 2. 배열 선언 가능
// 3. 동일 성격을 가진 오브젝트 생성가능
// 4. 오브젝트 내에 펑션 생성 가능, 중괄호로 정확히 묶여야 힌디


// const Calculator= {
//     add: function (a, b){
//         console.log(a+b);
//     },
//     minus: function (a, b){
//         console.log(a-b);
//     },
//     divided: function(a, b) {
//         console.log(a/b);
//     },
//     multi: function(a,b){
//         console.log(a*b);
//     },
//     squre: function (a, b){
//         console.log(a**b);
//     },
// };

// Calculator.add(5,1);
// Calculator.minus(6,1);
// Calculator.divided(2,2);
// Calculator.multi(4,4);
// Calculator.squre(2,3);


// // #2.12 Recap
// -- console.log는 결과값을 브라우저 창에 보여주지면 특정 변수에 저장, 변수 출력시 값이 나타나지 않는다. 
// 변수에 값을 저장하려면 return 값을 사용해야 하며 해당 return을 사용하면 return 된 후에 바로 종료하기 때문에
// return후에 바로 console.log를 수행해도 값이 나타나지 않는다.

// const Calculator= {
//     add: function (a, b){
//         return a + b ;
//         // console.log("bye")''
//     },
//     minus: function (a, b){
//         return a-b;
//     },
//     divided: function(a, b) {
//         return a/b;
//     },
//     multi: function(a, b){
//         return a*b;
//     },
//     squre: function (a, b){
//         return a**b;
//     },
// };

// const plusResult = calculator.plus(2,3);

// #2.13 Conditionals

// const age = prompt("How old are you?"); //창으로 뜨면서 자바스크립트가 도는걸 막는다 대답이 오기전까지 그다음 구문 막음 오래된 방법임. 이제 안씀

// // console.log(typeof age); //typeof 받는 답의 캐리거가 무엇인지 나옴  >string 으로 나옴 propt가 받는 처음 인자가 무조건 stringdldudi gkrl Eoans

// //캐리거 변환

// // parseInt("14")

// // console.log(typeof "14", typeof parseInt("14"));

// console.log(age, parseInt(age)); // NaN : not a number


// const age = parseInt(prompt("How old are you?")); 
// console.log(age);

// #2.15 Conditonals part three

// const age = parseInt(prompt("How old are you?")); 

// if (isNaN(age)) {
//     console.log("please input number");
//     } else if (age<18) {
//         console.log("you young");
//     } else {
//         console.log("you can drink");
//     }

    //조건 2개  amd ; &&  , or : ||

//     const age = parseInt(prompt("How old are you?")); 

// if (isNaN(age) || age < 0 ) {
//     console.log("please input number, input positivie number");
//     } else if (age<18) {
//         console.log("you young");
//     } else if(age>=18 && age <= 50) {
//         console.log(" you cna drink");
//     }  else if (age > 50 && age <=80){
//         console.log("you should workout");
//     }
//     else if (age===100){ //not : !== , 같다 === (3개)
//         console.log("wow");
//     }
//     else if (age >80) {
//         console.log("you can drink");
//     }
   
// 더 복잡한 조건
//     if((a&&b) || (c&&d)) {

//     }

    // !! 언제나 조건은 소문자가 먼저 실행되고 그다음 중괄호


//DAY4, #3.1
//자바스크립트는 html값을 받을수도 변경할 수도 있다. 
// console에서 
// console.log(document.title);//> momentum 
// document.title='hi'
// console.log(document.title);

// document.title="hello js";      -- 콘솔에서 hello js 출력됨

// document.뒤에 어떤 항목이 오는지 보라




// console.log("title");

//  title.innerText="got you";
// console.log(title.id);
// console.log(title.className);

// html 에있는 걸 자바스크립트로 불러와서 그 값을 불러오고 그 항목들도 가져올 수 있고 변경도 가능하다

//id를 get 하는 경우는 많지 않다. 

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);
// console.log(hellos);
// console.log(hellos);
// console.log(hellos);
// console.log(hellos);

// 실제 hello를 5번이나 쓰지 않는다

// console.log("title");
// const title=document.getElementsByTagName("h1");
// console.log(title); //title 자체가 배열이기"때문에 다른항목을 가져올수 있다 title.



// const title=document.querySelector(".hello h1"); // . < css 불러오기, hello 의 h1
// console.log(title); 




// const title=document.querySelector(".hello h1:first-child"); // //querySelector 처음의 인자값만 return한다. 복수개를 가지고 싶으면 querySelectorAll 사용해야
// console.log(title); 
// const title=document.querySelector(".hello h1"); 
// console.log(title); 
// title.innerText ="Hello";

// const title=document.querySelector("#hello");
// const title=document.getElementById("hello"); //위아래 동일


//#3.3 Event

//h1 오브젝트 값을 대부분 바꿀 수 있지만 그럴 수 없는 것도 있음
// const title=document.querySelector("div.hello:first-child h1"); 
// console.log(title); 

// title.style.color="blue"

// // 이벤트를 listen 
// const title=document.querySelector("div.hello:first-child h1"); 

// function handleTitleClick(){
//     console.log("title was clicked!")
// }

// or

// const title=document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     title.style.color="blue";
// }

// title.addEventListener("click", handleTitleClick); //handleTitleClick() 게 하면 바로 작동하기 때문에 클릭후에 동작하게 (() 안써야 

//3.4 Event part two
// element 알고 싶으면 구글링  web api가 포함된걸 찾으면 자바스크립트 기준에서 html을 번역한걸 찾을 수 있다
//sytle 은 css로 변경하는게 맞지만 자바스크립트로도 가능


// const title=document.querySelector("div.hello:first-child h1");
// console.log(title);
// // console.dir(title);  //html 폰트나 형태에 대한 자세한 내역 전체 출력
// function handleTitleClick(){
//     title.style.color="blue";
// }

// function handleMouseEnter(){
//     // console.log("mouse is here!");
//     title.innerText="Mouse is here";
// }

// function handleMouseLeave(){
//     title.innerText="Mouse is gone";
// }
// title.addEventListener("click", handleTitleClick); //handleTitleClick() 게 하면 바로 작동하기 때문에 클릭후에 동작하게 (() 안써야 
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// title.onclick = handleTitleClick;   //위와 동일하게 작동

//#3.5 다양한 이벤트 windeow

// const h1=document.querySelector("div.hello:first-child h1");


// function handleTitleClick(){
//     h1.style.color="blue";
// }

// function handleMouseEnter(){
//     // console.log("mouse is here!");
//     h1.innerText="Mouse is here";
// }

// function handleMouseLeave(){
//     h1.innerText="Mouse is gone";
// }

// function handleWindowResize(){
//     document.body.style.background="tomato"; //여기서 body 타이틀은 html의 것이다
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("sos no wifi");
// }
// function handleWindowOnline(){
//     alert("good");
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);


// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);



//4일차 과제
// 마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
// 마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
// 브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
// 마우스를 우 클릭하면 title이 바뀌어야 합니다.
// title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
// .css 와 .html 파일은 수정하지 마세요.
// 모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
// 모든 조건이 충족되지 못하면 를 받습니다.

//1. 내 답안, 모든 함수 핸들러는 내부에 작성해야 합니다
//import "./styles.css";
// const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// const superEventHandler=document.querySelector("h1");


// function handleMouseEnter(){
//     // console.log("mouse is here!");
//     superEventHandler.innerText="Mouse is here";
//     superEventHandler.style.color="green";
// }

// function handleMouseLeave(){
//     superEventHandler.innerText="Mouse is gone";
//     superEventHandler.style.color="blue"
// }

// function handleWindowResize(){
//     superEventHandler.innerText="You just resized!";
//     superEventHandler.style.color="purple"
// }

// function handleWindowContextMenu(){
//     superEventHandler.innerText="That was a right click";
//     superEventHandler.style.color="orange"
// }



// superEventHandler.addEventListener("mouseenter", handleMouseEnter);
// superEventHandler.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("contextmenu", handleWindowContextMenu);


//써칭
// const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// const h1=document.querySelector("h2");

// const superEventHandler ={
//  MouseEnter: function() {
//     h1.innerText="Mouse is here";
//     h1.style.color = colors[0];
// },

//  MouseLeave: function(){
//     h1.innerText="Mouse is gone";
//     h1.style.color=colors[1];
// },

//  WindowResize: function(){
//     h1.innerText="You just resized!";
//     h1.style.color=colors[2];
// },

//  WindowContextMenu: function(){
//     h1.innerText="That was a right click";
//     h1.style.color=colors[3];
// }
// };


// h1.addEventListener("mouseenter", superEventHandler.MouseEnter);
// h1.addEventListener("mouseleave", superEventHandler.MouseLeave);

// window.addEventListener("resize", superEventHandler.WindowResize);
// window.addEventListener("contextmenu", superEventHandler.WindowContextMenu);





//#3.6 


// const h1=document.querySelector("div.hello:first-child h1");


// function handleTitleClick(){

    
//     if(h1.style.color=="blue"){
//         h1.style.color="tomato";
//     }
//     else{
//         h1.style.color="blue";
//     }
//     }
    
// h1.addEventListener("click", handleTitleClick);

//위와 동일

// const h1=document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const currentColor=h1.style.color;
//     let newColor;
//     if(currentColor=="blue"){
//         newColor="tomato";
//     }
//     else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
//     }
    
// h1.addEventListener("click", handleTitleClick);

//#3.7
//어플리케이션이 자바ㅅ크립트에서, html을 바라보고 html은 모양은 css에서

// const h1=document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     h1.className = "acitve";

// }

// h1.addEventListener("click", handleTitleClick);



//클릭할때마다 색이 바뀌게, ===면 값이 같은지 보는거고 =면 업데이트 시키는 것

// const h1=document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     if(h1.className === "active"){
//         h1.className = "";
//     } else {
//         h1.className = "active";
//     }
    
// }

// h1.addEventListener("click", handleTitleClick);

//active 란 이ㄹㅁ은 다소 위험함. 그래서 변경 clicked+ 오타방질ㄹ 위해 변수로 받음
// const h1=document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     const clickedClass = "clicked" ;
//     if(h1.className === clickedClass){
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
    
// }

// h1.addEventListener("click", handleTitleClick);

// 흔히하는 실수 /자바스크립트에서는 class ㅣㅇ름을 변경하지 안흔다. classname 은 바로 변경해버림/ class list는 htmlt에 class name 을 포함

// const h1=document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     const clickedClass = "clicked" ;
//     if(h1.className === clickedClass){
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
    
// }

// h1.addEventListener("click", handleTitleClick);


// const h1=document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     const clickedClass = "clicked" ;
//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
    
// }

// h1.addEventListener("click", handleTitleClick);

//위오 동일 class name이 잇거나 없으면 상태를 바꿈 toggle

// const h1=document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     h1.classList.toggle("clicked");
//     }
    
// h1.addEventListener("click", handleTitleClick);

//day5 과제  if/else 써라


// import "./styles.css";

// const body=document.querySelector("body");

// function handleResize() {
//     let width = window.innerWidth;
//     if( width > 800){
//         body.className="wide";
//     }else if (width > 600 && width <800){
//         body.className="middle";
//     }else {
//         body.className="narrow";
//     }
// }



// window.addEventListener("resize", handleResize);

// https://codesandbox.io/s/empty-blueprint-forked-4bklcc?file=/src/index.js




//----------------------DAY 7 ----------------------

//주의 querySelector 는 classname, tagname 모두 검색 가능
// const loginForm = document.getElementById("login-Form");  //html의 div 부분 모두 가져온다
// const loginInput = loginForm.querySelector("input"); //위에서 받아온 모든 것에서 input 값을 가져온다
// const loginButton = loginForm.querySelector("button");  // 위에서 받은 값들 중에 button 값을 받는다

//위와 동일하게, 하지만 코드는 짧게 

// const loginInput = document.querySelector("#login-form input"); //오직 하나의 elementry 만 받아옴
// const loginButton = document.querySelector("#login-form button");


// function handleLoginButtonClick(){
//     // console.dir(loginInput); //콘솔에서 value값을 보면 된다. 또는 html 의     <input type="test" value="alalal" placeholder="What is your name?" />
//     // console.log("click");
//     console.log(loginInput.value);
  
// }
// loginButton.addEventListener("click",handleLoginButtonClick)

// 버튼을 눌렀을때만 콘솔에 해당 값을 받아서 출력하고 싶다 > if else 사용

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// // ---이러한 조건들은 html에서 진행 가능 input 안에서/(값의 유효성을 따지기 위해서는 form 형식을 사용해야 함/ form 형식에서는 웹사이트가 계쏙 submit되고 있음
//  function onLoginBtnClick(){
//     const username=loginInput.value;
//     if(username=== ""){
//         alert("please write your name");
//     }
//     else if (username.length > 15) {
//         alert("your name is too long");
//     }
// }

// loginButton.addEventListener("click",onLoginBtnClick)
// //-----------

// function onLoginBtnClick() {
//   console.log("hello", loginInput.value);
//   const username = loginInput.value;
//   console.log(username);
// }

// loginButton.addEventListener("click", onLoginBtnClick);


// html 링크, onLoginSubmitalert 로 막기

// const link = document.querySelector("a");

// function handlerClick(){

//     alert("clicked!");
// }

// link.addEventListener("click", handlerClick);





// 펑션으로 동작 막기, submit 은 html form 의 형태
// const loginInput = document.querySelector("#login-form input");
// const loginForm = document.querySelector("#login-form");
// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault(); //브라우져 기본 동작(t새로고침) stop
//     console.log(loginInput.value);

// }



// loginForm.addEventListener("submit", onLoginSubmit);

//??  form submit 이 아니라 mouse move #4.3 . > 여기 다시
// const loginInput = document.querySelector("#login-form input");
// const loginForm = document.querySelector("#login-form");
// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value);

// }


// function handlerClick(event){
//     event.preventDefault();
//     console.log(event);
        
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handlerClick);


//로그인 박스에 넣은 값이 버튼 클릭후 없애기
//1. css 에서 없애기

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     const username=loginInput.value;
//     loginForm.classList.add("hidden"); //body 내의 hidden 이라는 class name 더하기
//     console.log(username);

// }

// loginForm.addEventListener("submit", onLoginSubmit);

// ------------


// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button")
// const greeting = document.querySelector("#greeting");

// function onLoginBtnClick() {
//     const HIDDEN_CLASSNAME="hidden";
// }

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add("hidden");
//     const username=loginInput.Value;
//     console.log(username);
//     greeting.innerText="hello " + username;
//     // greeting.innerText=`hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginButton.addEventListener("click", onLoginBtnclick);
// loginForm.addEventListener("submit", onLoginSubmit);

// ----- click 부분 다시
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// const greeting = document.querySelector("#greeting");

// function onLoginBtnClick() {
// const HIDDEN_CLASSNAME = "hidden";
// }
// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   console.log(username);
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginButton.addEventListener("click", onLoginBtnClick);
// loginForm.addEventListener("submit", onLoginSubmit);

//----------------


// #4.5 username 기억하기 api 이미 있음 콘솔에서 local storage
// 콘솔옆에 application 에 있음
//developer.mozilla.org 에서 local storage 찾아보면 용법이 나옴
//console 창에 localStorage.setItem("username", "nico") 한 후에 storage에서 로컬 보면 nico 생성되어 있음



// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem("username", username);
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

// //#4.6
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //username 반복으로 인해 오타방지를 위한 변수설정

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);  //위에  greeting 2개구문 위아래 반복해서 사용해서 함수로 만들어버림

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}


//과제
// const clockTitle = document.querySelector(".js-clock");

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
//   clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
// }

// function init() {
//   getTime();
//   setInterval(getTime, 1000);
// }


































