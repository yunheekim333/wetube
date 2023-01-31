// const TodoForm = document.getElementById("todo-form");
// const ToDoInput = document.querySelector("#todo-form input")
// //또는             TodoForm.querySelector("input");
// //위에거는 html 전체 값에서 query 값을 받는 것, 아래것은 todo -form 안에서 input 값을 찾는것
// const ToDoList = document.getElementById("todo-list");

// //const toDos = []; //4입력값은 브라우저에만 저장되므로 해당 값을 일단 배열에 받는다
// // 13 새로고침할때마다 이전 저장된 것이 사라지는건 빈 배열을 지정했기 때문
// let toDos = [];

// //6 계속해서 "todos" 가 사용되므로 변수로 지정
// const TODOS_KEY = "todos";

// //5위의 배열값을 로컬 스토리지에 저장한다 
// function saveTodos(){
//     //localStorage.setItem("todos", toDos); //로컬스토리지에 단순 텍스트로 저장되어 중복되는 값이 저장되지 않고 모든 값이 사라짐. 배열로 받기 위해서 웹브라우저 지원 기능 사용
//     localStorage.setItem("todos", JSON.stringify(toDos));
// }

// function DeleteTodo (event) {
//    // 3 console.log("de") --어느버튼이 눌렷는지 모른다. click에 event랄 받아서 해당값을 전달, 더 잘 보기 위해 dir로 변경
//    // console.dir(event.target); //element 창에 target값에 표현되고 더 들어가 parnetElement 값을 그 안에 inner text 값을 얻을 수 있음
//    //console.dir(event.target.parentElement.innerText);  //inner text를 삭제해도 li란에 나옴
//    const li = event.target.parentElement; 
//    //14 삭제전에 id 얻어야
//    //해당 버튼의 target 값을 가지는 버튼의 부모(li)를 찾는 것이다
 
//    li.remove();
//    //지우기 위해서 지워지는 것 외에 남은 걸 새로운 배열에 넣고 출력
//    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
//    saveTodos();
// }

// function paintTodo(newTodo){
//  //  2 console.log("i will paint", newTodo);
//     const li = document.createElement("li");
//     //14 입력 텍스트 말고 li 값 받기
//     li.id = newTodo.id;
//     const span = document.createElement("span");
//     //14번에서 오브젝트에 받아야 하므로 spun 값으로 텍스트를 받아야 한더
//     span.innerText = newTodo;
//     const button = document.createElement("button");
//     button.innerText= 'X';
//     button.addEventListener("click", DeleteTodo);
//     li.appendChild(span);
//     li.appendChild(button); //언제나 appendchild 같이 추가하는것은 마지막에
//     span.innerText = newTodo;
//    // console.log(li);
//     ToDoList.appendChild(li);
// }



// // 1 아래 발생한 submit 이벤트를 인자로 받겟다
// function handleToDoSubmit(event) {
//     event.preventDefault();  
//     console.log(ToDoInput.value);
//     const newTodo = ToDoInput.value;
//     ToDoInput.value="";
//     //14. 삭제버튼으로 눌러도 로컬스토리지에 데이터가 저장된 상태, 
//     // 데이터를 넣을때 object 형식에 넣고 거기서 id를 어얻자
//     const newTodoObj = {
//         text: newTodo,
//         id : Date.now(), //콘솔지원 함수, 각 li의 삭제되는 놈의 li가 알고 싶음
//     };
//     toDos.push(newTodoObj);;
//    //14 toDos.push(newTodo);
//    // console.log(newTodo, ToDoInput);
//     paintTodo(newTodoObj);
//     saveTodos();
// }

// // 12 form은 submit이라는 이벤트를 가지고 이를 기반으로 늘 새로고침한다
// TodoForm.addEventListener("submit", handleToDoSubmit);

// // function sayHello(item){ //11. 어떤 배열값인지 알기 위해서는 each 구문에서 발생하는 이벤트 인자값을 받아야 한다. item 고정
// //     console.log("this is the turn of", item);
// // }

// const savedToDos = localStorage.getItem(TODOS_KEY); //7로컬스토리지 텍스트를 변수로 저장

// if(savedToDos !== null) {
//     const parsedToDos = JSON.parse(savedToDos);  //8스토리지에 일반 텍스트로 저장된 내역을 배열의 저장 형태로 바꿔주는 함수, 
//     //console.log(parsedToDos);
//     //parsedToDos.forEach(sayHello); // 9배열로 받은 값의 각 배열마다의  해주고 싶은 일을 수행할 수 있게 도와주는 함수이다. 
//    // parsedToDos.forEach((item) =>  console.log("this is the turn of ", item));
//     //12번과 같이 또 함수 안만들고 이렇게 처리해도 결과 동일    
    
//     //13 이어서, 새로고침 후에도 앞에 저장된 내역을 불러오기 위해 변수 저장 타입을 바꾸고 추가로 저장
//     toDos=parsedToDos;
//     parsedToDos.forEach(paintTodo);


// }

// /// 특정 id 값을 지우고 ㅅㅍ을때
// //지워지는거 빼고 나머지 값들을 출력 

// -----------------


const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}