const initialValueDisplay = document.querySelector(".screen-current");
const runningValueDisplay = document.querySelector(".screen-last");
const selectedNumber = document.querySelectorAll("[data-number]");
const selectedOperator = document.querySelectorAll("[data-operator]");
const clearBtn = document.querySelector(".clear-btn");
const delBtn = document.querySelector(".del-btn");

let runningValue = "";
let currentValue = "";
let currentOperator = "";

console.log(currentOperator);

function render() {
  initialValueDisplay.innerText = currentValue;
  runningValueDisplay.innerText = runningValue;
  console.log(runningValue);
}

selectedNumber.forEach((number) => {
  number.addEventListener("click", (e) => {
    currentValue = currentValue + e.target.innerText;
    runningValue = runningValue + e.target.innerText;
    render();
  });
});

selectedOperator.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    currentOperator = e.target.innerText;
    runningValue = `${runningValue} ${e.target.innerText} `;
    render();
    currentValue = "";
  });
});

clearBtn.addEventListener("click", () => {
  currentValue = "";
  runningValue = "";
  render();
});
