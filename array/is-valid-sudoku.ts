/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

  - Each row must contain the digits 1-9 without repetition.
  - Each column must contain the digits 1-9 without repetition.
  - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
  
  Note:
  A Sudoku board (partially filled) could be valid but is not necessarily solvable.
  Only the filled cells need to be validated according to the mentioned rules.
  
  Example 1:
  Input: board = 
  [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ]
  Output: true
  
  Example 2:
  Input: board = 
  [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ]
  Output: false
  
  Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
  

  Constraints:
  board.length == 9
  board[i].length == 9
  board[i][j] is a digit 1-9 or '.'.
 */

export const isValidSudoku = (board: string[][]): boolean => {
  const subBoxes: string[] = Array(9).fill('');
  let row: string;
  let column: string;
  let k: number;

  for (let i = 0; i < 9; i++) {
    row = board[i].join('');
    column = '';

    const seivedRow = row.replace(/\./g, '');

    if (new Set(seivedRow).size !== seivedRow.length) {
      return false;
    }

    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.') {
        column += board[j][i];
      }

      switch (true) {
        case i < 3:
          k = -1;
          break;
        case i < 6:
          k = 2;
          break;
        default:
          k = 5;
      }

      switch (true) {
        case j < 3:
          k += 1;
          break;
        case j < 6:
          k += 2;
          break;
        default:
          k += 3;
      }

      subBoxes[k] += row[j] !== '.' ? row[j] : '';
    }

    if (
      new Set(column).size !== column.length ||
      subBoxes.some((subBox) => new Set(subBox).size !== subBox.length)
    ) {
      return false;
    }
  }

  return true;
};
