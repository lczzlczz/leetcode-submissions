/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   for (let i = 0, j = numbers.length - 1; i < numbers.length; i++) {
     while (i < j && numbers[i] + numbers[j] > target) j--;
     if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
   } 
   return [];
};