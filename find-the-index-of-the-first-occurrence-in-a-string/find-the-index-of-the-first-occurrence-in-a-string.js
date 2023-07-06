/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    const str = joinStr(haystack, i, i + needle.length);
    if (str === needle) return i;
  }
  return -1;
};

const joinStr = (arr, start, end) => {
  let res = '';
  for (let i = start; i < end; i++) {
    res += arr[i];
  }

  return res;
}