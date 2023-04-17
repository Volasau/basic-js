const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const colums = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < colums; j++) {
      let count = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let n = j - 1; n <= j + 1; n++) {
          if (
            k >= 0 &&
            n >= 0 &&
            k < rows &&
            n < colums &&
            (k !== i || n !== j)
          ) {
            count += matrix[k][n] ? 1 : 0;
          }
        }
      }
      result[i].push(count);
    }
  }

  return result;
}
module.exports = {
  minesweeper,
};
