const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line) => {
  const n = parseInt(line.trim());
  let count = 0;
  let power = 5;

  while (power <= n) {
    count += Math.floor(n / power);
    power *= 5;
  }

  console.log(count);
  rl.close();
});
