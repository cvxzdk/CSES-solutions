const n = parseInt(require("fs").readFileSync("/dev/stdin", "utf8").trim());

if (n === 1) {
  console.log(1);
} else if (n <= 3) {
  console.log("NO SOLUTION");
} else {
  const result = [];

  for (let i = 2; i <= n; i += 2) result.push(i);
  for (let i = 1; i <= n; i += 2) result.push(i);

  console.log(result.join(" "));
}
