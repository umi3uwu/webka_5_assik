
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));

function distanceFrom100(num) {
  return Math.abs(100 - num);
}


const numbers = [num1, num2, num3];


numbers.sort((a, b) => distanceFrom100(a) - distanceFrom100(b));


const nearest = numbers[0];
const farthest = numbers[2];


document.getElementById("result").innerHTML = `
  <p>The number nearest to 100 is: ${nearest}</p>
  <p>The number farthest from 100 is: ${farthest}</p>
`;
