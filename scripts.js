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

// operation buttons will display INPUT expression in EXPRESSION
const ALL_OPERATIONS = Array.from(document.querySelectorAll(".operation"));
ALL_OPERATIONS.pop();

for (btn of ALL_OPERATIONS) {
    let text = btn.textContent;
    
    function inputText() {
        EXPRESSION.textContent += " " + INPUT.textContent + " " + text;
        INPUT.textContent = "";
    };
    
    btn.addEventListener("click", inputText);
};

// function for equals sign to evaluate EXPRESSION

const EQUALS = document.querySelector("#equals");

EQUALS.addEventListener(() => {
    EXPRESSION.textContent += INPUT.textContent
    EXPRESSION.textContent
});