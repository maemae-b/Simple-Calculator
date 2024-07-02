let num1 = 0;
let num2 = 0;
let sum = 0;
let operation;

// DOM
const EXPRESSION = document.querySelector("#expression");
const INPUT = document.querySelector("#input");

// map buttons so they correspond to display
const ALL_BTNS = Array.from(document.querySelectorAll("button"));

for (btn of ALL_BTNS) {
    let text = btn.textContent;
    
    function inputText() {
        INPUT.textContent += text;
    };
    
    btn.addEventListener("click", inputText);
};