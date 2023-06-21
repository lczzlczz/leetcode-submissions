/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = new Map;
  for (let i = 0; i < numbers.length; i++) {
    const key = target - numbers[i];
    if (map.has(key)) {
      return [map.get(key) + 1, i + 1];
    } else {
      map.set(numbers[i], i);
    }
  }
};