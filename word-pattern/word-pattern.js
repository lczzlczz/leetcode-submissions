/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sArr = s.split(' ');
  if (pattern.length !== sArr.length) return false;

  const p2s = new Map;
  const s2p = new Map;
  for (let i = 0; i < pattern.length; i++) {
    const [x, y] = [pattern[i], sArr[i]];
    if (p2s.has(x) && p2s.get(x) !== y || s2p.has(y) && s2p.get(y) !== x) return false;
    p2s.set(x, y);
    s2p.set(y, x);
  }
  return true;
};