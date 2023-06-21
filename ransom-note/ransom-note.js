/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const countRansomNote = count(ransomNote);
  const countMagazine = count(magazine);

  for (let key of countRansomNote.keys()) {
    if (!countMagazine.has(key) || !(countMagazine.get(key) >= countRansomNote.get(key))) {
      return false;
    }
  }
  return true;
};

const count = (str) => {
  let res = new Map;
  for (let s of str) {
    res.set(s, res.has(s) ? res.get(s) + 1: 1);
  }
  return res;
}