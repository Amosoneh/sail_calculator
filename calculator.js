const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function myCalculator(num1, op, num2) {
  try {
    switch (op) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "/":
        return num1 / num2;
      case "*":
        return num1 * num2;
      default:
        return null;
    }
  } catch (error) {
    return error.message;
  }
}

function startMyCalculator() {
  rl.question("Please enter number 1: ", (num1) => {
    rl.question("Choose an operator (*, +, -, /): ", (op) => {
      rl.question("Please enter number 2: ", (num2) => {
        const result = myCalculator(Number(num1), op, Number(num2));
        console.log("Result:", result);
        rl.question("Do you want to try again? ", (ans) => {
          if (ans.toLowerCase() === "no") {
            rl.close();
          } else {
            startMyCalculator();
          }
        });
      });
    });
  });
    
}

console.log('Simple Console Calculator (Type "exit" to quit)');
startMyCalculator();
