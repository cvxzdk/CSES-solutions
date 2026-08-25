const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const n = parseInt(line.trim());
  const results = [];

  for (let k = 1; k <= n; k++) {
    const bk = BigInt(k);
    const total = (bk * bk * (bk * bk - 1n)) / 2n;
    const attacking = 4n * (bk - 1n) * (bk - 2n);
    results.push((total - attacking).toString());
  }

  console.log(results.join("\n"));
});
