/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  // states = [0, 1, 2, 3]
  //     before   now
  // 0 => dead => dead
  // 1 => live => live
  // 2 => dead => live
  // 3 => live => dead

  const m = board.length; 
  const n = board?.[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const lives = countLives(i, j, board);
      const cell = board[i][j];
      if (cell === 1) {
        if (lives < 2 || lives > 3) board[i][j] = 3;
      } else {
        if (lives === 3) board[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const cell = board[i][j];
      if (cell === 0 || cell === 3) board[i][j] = 0;
      if (cell === 1 || cell === 2) board[i][j] = 1;
    }
  } 
};

const countLives = (i, j, board) => {
  let count = 0;
  for (let row = i - 1; row < i + 2; row++) {
    for (let col = j - 1; col < j + 2; col++) {
      if (row === i && col === j) continue;
      const cell = board[row]?.[col];
      if (cell === 1 || cell === 3) count++;
    }
  }

  return count;
}