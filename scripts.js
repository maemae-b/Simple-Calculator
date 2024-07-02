let num1 = 0;
let num2 = 0;
let sum = 0;
let operation;

// DISPLAYS
const EXPRESSION = document.querySelector("#expression");
const INPUT = document.querySelector("#input");

// map buttons so they correspond to display
const ALL_NUMS = Array.from(document.querySelectorAll(".number"));

for (btn of ALL_NUMS) {
    let text = btn.textContent;
    
    function inputText() {
        INPUT.textContent += text;
    };
    
    btn.addEventListener("click", inputText);
};

// upon pressing operation buttons
const ALL_OPERATIONS = Array.from(document.querySelectorAll(".operation"));

for (btn of ALL_OPERATIONS) {
    let text = btn.textContent;
    
    function inputText() {
        INPUT.textContent += text;
    };
    
    btn.addEventListener("click", inputText);
};
