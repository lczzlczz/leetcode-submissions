/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;

  const arr = storeString(s, numRows);

  const n = arr.length;
  const m = arr?.[0].length;
  let res = convertArr(arr, n, m);

  return res.map(val => val.join('')).join('');
};

const convertArr = (arr, n, m) => {
  let res = new Array(m).fill().map(() => new Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[j][i] = arr[i][j];
    }
  }

  return res;
}

const storeString = (s, numRows) => {
  let arr = [];
  let col = 0;
  let level = [];
  for (const char of s) {
    let n = numRows - 1;
    
    if (col % n === 0) {
      level.push(char);
      if (level.length === numRows) {
        arr.push(level);
        col++;
        level = [];
      }
    } else {
      const index = n - col % n;
      level = new Array(numRows).fill('');
      level[index] = char;
      arr.push(level);
      col++;
      level = [];
    }
  }

  if (level.length > 0) arr.push(level);

  return arr;
}