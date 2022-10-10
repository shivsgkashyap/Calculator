const initialValueDisplay = document.querySelector(".screen-current");
const runningValueDisplay = document.querySelector(".screen-last");
const selectedNumber = document.querySelectorAll("[data-number]");
const selectedOperator = document.querySelectorAll("[data-operator]");
const clearBtn = document.querySelector(".clear-btn");
const delBtn = document.querySelector(".del-btn");
const equalsButton = document.getElementById("equalsBtn");
const pointButton = document.getElementById("pointBtn");

let currentValue = 0;
let runningValue = "";
let currentOperator = "";

window.addEventListener("keydown", handleKeyboardInput);
equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);

function render() {
  initialValueDisplay.innerText = currentValue;
  runningValueDisplay.innerText = runningValue;
  console.log(currentValue);
}

selectedNumber.forEach((number) => {
  number.addEventListener("click", (e) => {
    currentValue
      ? (currentValue = currentValue + e.target.innerText)
      : (currentValue = e.target.innerText);
    runningValue = runningValue + e.target.innerText;
    if (initialValueDisplay.textContent.includes(".")) return;
    render();
  });
});

selectedOperator.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    currentOperator = e.target.innerText;
    runningValue = `${runningValue} ${e.target.innerText} `;
    currentValue = 0;
    render();
  });
});

function clear() {
  currentValue = 0;
  runningValue = "";
  render();
}

function deleteNumber {
  if (currentValue) {
    currentValue = currentValue.slice(0, -1);
    runningValue = runningValue.slice(0, -1);
  } else {
    runningValue = runningValue.slice(0, -2);
  }
  render();
}

