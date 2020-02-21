window.addEventListener('DOMContentLoaded', () => {

const $helloSection = document.querySelector(".hello");
const $helloBtn = document.querySelector(".hello__button");

const $changeText = document.getElementById("change__text");
const $changeBtn = document.getElementById("change__button");

const $removeBtn = document.querySelector(".remove__button");
const templateArr = ["awesome", "painful", "sadistic"];

const $inputBtn = document.getElementById("inputWisdom__button");
const todos = [];
const $todoBtn = document.getElementById("todo__button");


$helloBtn.addEventListener("click", (event) => {
    const p = document.createElement("p");
    p.textContent = "Hello hello helloooooo";
    p.setAttribute("class", "helloText");
    document.body.appendChild(p);
})

$removeBtn.addEventListener('click', (event) => {
    document.querySelector('.remove').remove();
})


$changeBtn.onclick = function (event) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const randomString = templateArr[Math.floor(Math.random() * templateArr.length)];
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    $changeText.textContent = `Writing JavaScript is so ${randomString}!`;
}

$inputBtn.addEventListener("click",(event)=>{
    const inputWisdom =  document.getElementById("inputWisdom__input");
    const p = document.createElement("p");
    const containerWisdom = document.querySelector(".inputWisdom");
    containerWisdom.innerHTML = `<p>${inputWisdom.value}</p>`;
    inputWisdom.value = '';


})
$todoBtn.onclick = function (event) {

    const todoInput = document.getElementById("todo__input");
    const todoList = document.getElementById("todo__list");
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    todoList.appendChild(li);
    todoInput.value="";
}


//API Work

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
})


