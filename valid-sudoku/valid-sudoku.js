/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // check rows
  for (let row of board) {
    const originalRow = row.filter(v => v !== '.');
    const set = new Set(originalRow);
    if (originalRow.length !== set.size) return false;
  }

  // check columns
  for (let i = 0; i < board.length; i++) {
    let col = [];
    for (let j = 0; j < board[0].length; j++) {
      if(board[j][i] !== '.') col.push(board[j][i]);
    }
    const set = new Set(col);
    if (col.length !== set.size) return false;
  }

  // check 9X9
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if(!check9X9(i, j, board)) return false;
    }
  }

  return true;
};

const check9X9 = (x, y, board) => {
  let arr = [];
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      if (board[i][j] !== '.') arr.push(board[i][j]);
    }
  }

  const set = new Set(arr);

  return arr.length === set.size;
}