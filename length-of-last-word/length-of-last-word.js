/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const str = s.trimEnd().split(' ');
  return str[str.length - 1].length;
};