/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const m = matrix.length;
  const n = matrix?.[0].length;
  //       N  E  S  W 
  //       0  1  2  3 
  let d = [0, 1, 0, 0];
  let res = [];

  let visited = new Array(m).fill().map(() => new Array(n).fill(0));
  console.log(visited);
  let [i, j] = [0, 0];
  while (visited[i]?.[j] === 0) {
    res.push(matrix[i][j]);
    visited[i][j] = 1;

    if (shouldTurn(i, j, visited, d)) {
      d.unshift(d.pop());
    }

    i = i - d[0] + d[2];
    j = j + d[1] - d[3];
  }

  return res;
};

const shouldTurn = (i, j, visited, d) => {
  const nextI = i - d[0] + d[2];
  const nextJ = j + d[1] - d[3];
  return visited[nextI]?.[nextJ] === 1 || visited[nextI]?.[nextJ] === undefined;
}