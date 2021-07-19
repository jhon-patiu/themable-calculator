"use strict";

class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  deleteNum() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let result;
    let prev = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "x":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return result;
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
  }
  updateDisplay() {
    this.currentOperandText.innerText = this.currentOperand;
    this.previousOperandText.innerText = this.previousOperand;
  }
}

const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const equalsBtn = document.querySelector("[data-equals]");
const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");

let calculator = new Calculator(previousOperandText, currentOperandText);

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  calculator.deleteNum();
  calculator.updateDisplay();
});
