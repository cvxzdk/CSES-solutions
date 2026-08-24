const lines = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const n = parseInt(lines[0]);
const a = lines[1].split(" ").map(Number);

let moves = 0n;
let prev = BigInt(a[0]);

for (let i = 1; i < n; i++) {
  const cur = BigInt(a[i]);
  if (cur < prev) {
    moves += prev - cur;
    prev = prev; // element is "raised" to prev
  } else {
    prev = cur;
  }
}

console.log(moves.toString());
