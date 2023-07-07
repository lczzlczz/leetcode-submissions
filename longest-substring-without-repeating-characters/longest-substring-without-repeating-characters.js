/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let [left, right, res] = [0, 0, 0];
  let charMap = new Map;
  let windowSize = 0;

  while (right < s.length) {
    const count = charMap.has(s[right]) ? charMap.get(s[right]) + 1: 1;
    charMap.set(s[right], count);
    windowSize = right - left + 1;
    if (windowSize === charMap.size)  {
      res = Math.max(res, windowSize);
    } else {
      const size = charMap.get(s[left]) - 1;
      if (size === 0) {
        charMap.delete(s[left]);
      } else {
        charMap.set(s[left], size);
      }
      left++;
    }
    right++;
  }

  return res;
};