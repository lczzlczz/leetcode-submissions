/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const processedStr = s.trim().
                      split(' ').
                      reverse().
                      filter(val => val !== '').
                      join(' ');

  return processedStr;
};