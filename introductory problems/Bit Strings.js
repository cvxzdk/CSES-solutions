const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const n = parseInt(line.trim());
  const MOD = 1000000007n;
  const bn = BigInt(n);

  let result = 1n;
  let base = 2n;
  let exp = bn;

  while (exp > 0n) {
    if (exp % 2n === 1n) result = (result * base) % MOD;
    base = (base * base) % MOD;
    exp /= 2n;
  }

  console.log(result.toString());
});
