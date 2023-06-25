/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map;
  for (let str of strs) {
    const key = str.split('').sort().join('');
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  } 
  
  return [...map.keys()].map(key => map.get(key));
};