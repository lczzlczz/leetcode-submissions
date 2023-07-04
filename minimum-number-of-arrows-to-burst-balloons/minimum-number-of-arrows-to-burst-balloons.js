/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length === 1) return 1;

  points.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]);
  
  console.log(points);

  let count = 1;
  let [xStart, xEnd] = points[0];
  for (let i = 1; i < points.length; i++) {
    const [start, end] = points[i];
    if (xEnd < start) {
      count++;
      [xStart, xEnd] = points[i];
    }
  }

  return count;
};
