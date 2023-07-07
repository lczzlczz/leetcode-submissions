/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let [left, right] = [0, 0];
  let min = Infinity;
  let charMap = new Map;
  let windowSize = 0;
  let [minLeft, minRight] = [0, 0];

  const strMap = count(t);

  while (right < s.length) {
    const rightChar = s[right];
    const count = charMap.has(rightChar)? charMap.get(rightChar): 0;
    charMap.set(rightChar, count + 1);

    while (includesAllChars(charMap, strMap)) {
      windowSize = right - left + 1;
      if (windowSize < min) {
        min = windowSize;
        [minLeft, minRight] = [left, right];
      } 

      const leftChar = s[left];
      const size = charMap.has(leftChar)? charMap.get(leftChar): 0;

      if (size === 1) {
        charMap.delete(leftChar);
      } else if (size > 1) {
        charMap.set(leftChar, size - 1);
      }

      left++;
    }

    right++;
  }

  return min !== Infinity ? s.slice(minLeft, minRight + 1): "";
};

const includesAllChars = (map, strMap) => {
  for (const key of strMap.keys()) {
    if (!map.has(key) || strMap.get(key) > map.get(key)) return false;
  }

  return true;
}

const count = str => {
  let res = new Map;
  for (const char of str) {
    const count = res.has(char)? res.get(char): 0;
    res.set(char, count + 1);
  }
  return res;
}