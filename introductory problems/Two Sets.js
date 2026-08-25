const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const n = parseInt(line.trim());
  const total = (n * (n + 1)) / 2;

  if (total % 2 !== 0) {
    console.log("NO");
    return;
  }

  const target = total / 2;
  const setA = [];
  let remaining = target;

  for (let i = n; i >= 1; i--) {
    if (i <= remaining) {
      setA.push(i);
      remaining -= i;
    }
  }

  const setASet = new Set(setA);
  const setB = [];
  for (let i = 1; i <= n; i++) {
    if (!setASet.has(i)) setB.push(i);
  }

  console.log("YES");
  console.log(setA.length);
  console.log(setA.join(" "));
  console.log(setB.length);
  console.log(setB.join(" "));
});
