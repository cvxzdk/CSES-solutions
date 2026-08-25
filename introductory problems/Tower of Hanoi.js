const n = parseInt(require("fs").readFileSync("/dev/stdin", "utf8").trim());

const moves = [];

function hanoi(n, from, to, aux) {
  if (n === 0) return;
  hanoi(n - 1, from, aux, to);
  moves.push(`${from} ${to}`);
  hanoi(n - 1, aux, to, from);
}

hanoi(n, 1, 3, 2);

// Build output in one go for performance
const out = [moves.length, ...moves].join("\n");
console.log(out);
