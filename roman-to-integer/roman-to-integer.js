/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symbol2Value = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let res = symbol2Value[s[s.length - 1]]
  let last = symbol2Value[s[s.length - 1]];
  for (let i = s.length - 2; i >= 0; i--) {
    let curr = symbol2Value[s[i]];
    if (curr >= last) {
      res += curr;
    } else {
      res -= curr;
    }
    last = curr;
  }

  return res;
};