let num1 = "";
let num2 = "";
let sum = "";
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

for (btn of ALL_OPERATIONS) {
    let text = btn.textContent;
    
    function inputText() {
        // stores num input in variables
        if (num1 !== "") {
            num2 = INPUT.textContent;
        } else {
            num1 = INPUT.textContent;
        };

        // displays input num and op to EXPRESSION
        if (text !== "=") {
            EXPRESSION.textContent += " " + INPUT.textContent + " " + text;
            INPUT.textContent = "";
            
            switch (text) {
                case "÷":
                    operation = "/";
                    break;
                case "×":
                    operation = "*";
                    break;
                case "+":
                    operation = "+";
                    break;
                case "−":
                    operation = "-";
            };
        } else {
            EXPRESSION.textContent += " " + INPUT.textContent;
            INPUT.textContent = "";
        };
    };
    
    btn.addEventListener("click", inputText);
};

// function for equals sign to evaluate EXPRESSION

const EQUALS = document.querySelector("#equals");

// EQUALS.addEventListener(() => {
//     EXPRESSION.textContent += INPUT.textContent;
    
// });