/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const n = Math.max(...citations);

  // citated at least N times
  const citated = new Array(n + 1).fill(0);
  for (let i = 0; i < citations.length; i++) {
    for (let j = 1; j < citations[i] + 1; j++) {
      citated[j]++;
    }
  }

  for (let i = citated.length - 1; i >= 0; i--) {
    if (citated[i] >= i) return i;
  }
};