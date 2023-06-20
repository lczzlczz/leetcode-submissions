/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.split("").filter(val => isAlphaOrNumber(val)).map(val => val.toLocaleLowerCase());
  let [left, right] = [0, str.length - 1];
  while (left < right) {
    if (str[left++] !== str[right--]) return false;
  }
  return true;
};

const isAlphaOrNumber = val => {
  return val >= 'A' && val <= 'Z' || val >= 'a' && val <= 'z' ||
  val >= '0' && val <= '9';
}