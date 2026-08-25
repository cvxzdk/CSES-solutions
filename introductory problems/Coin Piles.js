const lines = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");
const t = parseInt(lines[0]);
const result = [];

for (let i = 1; i <= t; i++) {
  const [a, b] = lines[i].trim().split(" ").map(Number);

  if ((a + b) % 3 === 0 && 2 * a >= b && 2 * b >= a) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}

console.log(result.join("\n"));
