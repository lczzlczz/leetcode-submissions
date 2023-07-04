/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const res = [];
  let acc = [...intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (acc[1] < intervals[i][0]) {
      res.push(acc);
      acc = [...intervals[i]]
    } else {
      const left = acc[0];
      const right = acc[1] > intervals[i][1]? acc[1]: intervals[i][1];
      acc = [left, right];
    }
  } 

  res.push(acc);

  return res;
};