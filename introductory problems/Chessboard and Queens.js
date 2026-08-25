const lines = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");
const board = lines.map((l) => l.split(""));

let count = 0;
const cols = new Array(8).fill(false);
const diag1 = new Array(15).fill(false);
const diag2 = new Array(15).fill(false);

function solve(row) {
  if (row === 8) {
    count++;
    return;
  }
  for (let col = 0; col < 8; col++) {
    if (board[row][col] === "*") continue;
    if (cols[col] || diag1[row - col + 7] || diag2[row + col]) continue;
    cols[col] = diag1[row - col + 7] = diag2[row + col] = true;
    solve(row + 1);
    cols[col] = diag1[row - col + 7] = diag2[row + col] = false;
  }
}

solve(0);
console.log(count);
