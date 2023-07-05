/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';

  let i = 0;
  let letter = strs[0][i];
  while (letter !== undefined) {
    if (isTheSame(letter, strs, i)) {
      prefix += letter;
    } else {
      break;
    }
    letter = strs[0][++i];
  }

  return prefix;
};

const isTheSame = (letter, strs, i) => {
  return strs.every(val => letter === val[i]);
}