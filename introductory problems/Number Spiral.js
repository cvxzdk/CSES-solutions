const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rl.on("line", (line) => {
  lines.push(line.trim());
});

rl.on("close", () => {
  const t = parseInt(lines[0]);
  const results = [];

  for (let i = 1; i <= t; i++) {
    const parts = lines[i].split(" ");
    const y = BigInt(parts[0]);
    const x = BigInt(parts[1]);

    let answer;

    if (x >= y) {
      if (x % 2n === 1n) {
        answer = x * x + 1n - y;
      } else {
        answer = (x - 1n) * (x - 1n) + y;
      }
    } else {
      if (y % 2n === 1n) {
        answer = (y - 1n) * (y - 1n) + x;
      } else {
        answer = y * y + 1n - x;
      }
    }

    results.push(answer.toString());
  }

  console.log(results.join("\n"));
});
