import Sum from "./add.js";
import Subtract from "./subtract.js";

const nums = [2, 3];

function displayResults(num1, num2) {
  const sum = Sum(num1, num2);
  const difference = Subtract(num1, num2);
  return `The sum of ${num1} and ${num2} is ${sum}
  The difference of ${num1} and ${num2} is ${difference}`;
}

console.log(displayResults(...nums));
