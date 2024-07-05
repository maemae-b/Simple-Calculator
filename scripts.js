let num1 = "";
let num2 = "";
let operation;
let answer = "";

// DISPLAYS
const EXPRESSION = document.querySelector("#expression");
const INPUT = document.querySelector("#input");

// map buttons so they correspond to display
const ALL_NUMS = Array.from(document.querySelectorAll(".number"));

for (btn of ALL_NUMS) {
    let text = btn.textContent;
    
    function inputText() {
        if (answer !== "") clear();
        INPUT.textContent += text;
    };
    
    btn.addEventListener("click", inputText);
};

// operation buttons will display INPUT expression in EXPRESSION
const ALL_OPERATIONS = Array.from(document.querySelectorAll(".operation"));
const EQUALS = ALL_OPERATIONS.pop();

for (btn of ALL_OPERATIONS) {
    let text = btn.textContent;
    
    btn.addEventListener("click", () => {
        num1 = INPUT.textContent;
        
        // displays input num and op to EXPRESSION
        EXPRESSION.textContent += " " + INPUT.textContent + " " + text;
        INPUT.textContent = "";
        operation = text;
    });
};

EQUALS.addEventListener("click", () => {
    num2 = INPUT.textContent;

    EXPRESSION.textContent += " " + INPUT.textContent;
    INPUT.textContent = "";
    operate();
    INPUT.textContent = answer;
});

function operate() {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operation) {
            case "÷":
                answer = num1 / num2;
                break;
            case "×":
                answer = num1 * num2;
                break;
            case "+":
                answer = num1 + num2;
                break;
            case "−":
                answer = num1 - num2;
        };
};

const CLEAR = document.querySelector("#clear");
const ERASE = document.querySelector("#erase");

function clear() {
    num1 = "";
    num2 = "";
    operation = "";
    answer = "";
    EXPRESSION.textContent = "";
    INPUT.textContent = "";
};

CLEAR.addEventListener("click", clear);

ERASE.addEventListener("click", () => {
    // let text = INPUT.textContent;
    let i = INPUT.textContent.length - 1;
    let text = INPUT.textContent.slice(0, i);
    INPUT.textContent = text;
});