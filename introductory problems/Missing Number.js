const lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const n = parseInt(lines[0]);
const nums = lines[1].trim().split(" ").map(Number);
console.log((n * (n + 1)) / 2 - nums.reduce((a, b) => a + b, 0));
