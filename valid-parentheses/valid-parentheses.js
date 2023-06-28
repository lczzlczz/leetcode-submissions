/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack = [];
   for (const char of s) {
     if (!isRightParen(char)) stack.push(char);
     else if (stack.length === 0) return false;
     else if (!isMatch(stack.pop(), char)) return false;
   } 
   
   return stack.length === 0;
};

const isRightParen = char => {
  const rightParen = ')]}';
  return rightParen.split('').includes(char);
}

const isMatch = (left, right) => {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  return map[left] === right;
}