/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const sMap = count(s);
  const tMap = count(t);

  for (let key of sMap.keys()) {
    if (sMap.get(key) !== tMap.get(key)) return false;
  }

  return true;
};


const count = str => {
  const res = new Map;
  for (let key of str) {
    res.set(key, res.has(key) ? res.get(key) + 1: 1);
  }
  return res;
}