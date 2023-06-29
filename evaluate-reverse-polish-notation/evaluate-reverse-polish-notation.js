/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  for (const token of tokens) {
    if (isOperator(token)) {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(calculate(first, second, token));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
};

const isOperator = token => {
  const operators = '+-*/';
  return operators.split('').includes(token);
}

const calculate = (first, second, token) => {
  switch(token) {
    case "+": return first + second;
    case "-": return first - second;
    case "*": return first * second;
    case "/": return Math.trunc(first / second);
  }
}