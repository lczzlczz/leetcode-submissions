/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let [p, q] = [0, 0];
  while (p < s.length) {
    if (q === t.length) return false;
    if (s[p] === t[q]) {
      p++;
      q++;
    } else {
      q++;
    }
  }
  return true;
};