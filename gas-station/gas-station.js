/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;

  const diff = new Array(n);
  for (let i = 0; i < n; i++) {
    diff[i] = gas[i] - cost[i];
  }

  let max = -Infinity;
  let maxI = -1;
  let acc = 0;
  for (let i = n - 1; i >= 0; i--) {
    acc += diff[i];
    if (acc > max) {
      max = acc;
      maxI = i;
    }
  }

  return acc >= 0? maxI: -1;
};
