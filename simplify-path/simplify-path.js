/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const arr = path.split('/');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '..') {
      stack.pop();
    } else if (arr[i] !== '' && arr[i] !== '.') {
      stack.push(arr[i]);
    }
  }

  return '/' + stack.join('/');
};