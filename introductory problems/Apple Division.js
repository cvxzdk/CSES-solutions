const lines = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");
const n = parseInt(lines[0]);
const p = lines[1].split(" ").map(Number);
const total = p.reduce((a, b) => a + b, 0);

const left = p.slice(0, Math.floor(n / 2));
const right = p.slice(Math.floor(n / 2));

function allSubsetSums(arr) {
  const sums = [];
  for (let mask = 0; mask < 1 << arr.length; mask++) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
      if (mask & (1 << i)) s += arr[i];
    }
    sums.push(s);
  }
  return sums;
}

function lowerBound(arr, target) {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

const leftSums = allSubsetSums(left);
const rightSums = allSubsetSums(right).sort((a, b) => a - b);

let minDiff = Infinity;

for (const ls of leftSums) {
  const idx = lowerBound(rightSums, total / 2 - ls);
  for (const i of [idx - 1, idx]) {
    if (i >= 0 && i < rightSums.length) {
      minDiff = Math.min(minDiff, Math.abs(total - 2 * (ls + rightSums[i])));
    }
  }
}

console.log(minDiff);
