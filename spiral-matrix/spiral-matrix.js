/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// Simulate the process
var spiralOrder = function(matrix) {
  // Create an m x n array to store visit state
  const [m, n] = [matrix.length, matrix?.[0].length];
  let visited = new Array(m).fill().map(() => new Array(n).fill(0));

  // Direction:   N  E  S  W
  // To North => [1, 0, 0, 0]
  // To East  => [0, 1, 0, 0]
  // To South => [0, 0, 1, 0]
  // To West  => [0, 0, 0, 1]
  // Direction:   N  E  S  W
  let dr =       [0, 1, 0, 0]; // Start by moving to the East

  let res = [];
  let [i, j] = [0, 0];
  while (visited[i]?.[j] === 0) {
    res.push(matrix[i][j]);
    visited[i][j] = 1;

    if (isCollided(i, j, visited, dr)) {
      turnRight(dr);
    }

    [i, j] = moveNext(i, j, dr);
 }

 return res;
};

// Check if the next(i, j) cooridinate is out of boundary or visited
const isCollided = (i, j, visited, dr) => {
  const [nextI, nextJ] = moveNext(i, j, dr);
  return visited[nextI]?.[nextJ] !== 0;
}

// Turn the direction to the right
const turnRight = dr => {
  dr.unshift(dr.pop());
}

// Calculate the next(i, j) coordinate based on the current direction
const moveNext = (i, j, dr) => {
  return [i - dr[0] + dr[2], j + dr[1] - dr[3]];
}