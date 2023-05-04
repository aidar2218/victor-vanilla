// function =>
// handler (обработчик), listener (слушатель), subscriber (подписчик)
// - при наступлении события
// const event = new Event() - объект, который содержит сведения о событии
// событии
// function(event) - вызов функции
// event, ev, e === new Event()

// [] = new Array()
// {} = new Object()
// const map = new Map()
// const set = new Set()


const sm = document.getElementById("small");
const ma = document.getElementById("medium");
const bg = document.getElementById("big");

function handler_1 () {
    alert("yo!!");
}
function handler_2 () {
    alert("hey!!");
}
function handler_3 () {
    alert("hey!!");
}


// const anonymus = () => handler_1("Yo!!");
// const anonymusNext = () => handler_1("Yo!!");
//
// sm.onclick = anonymus;
// sm.onclick = anonymusNext;

// sm.onclick = () => {
//     handler_1();
//     handler_2();
// }
//
// sm.onclick = () => {
//     handler_1();
// }



// sm.addEventListener("click", handler_1) // onClick
// sm.addEventListener("click", handler_2) //
// sm.removeEventListener("click", handler_1)