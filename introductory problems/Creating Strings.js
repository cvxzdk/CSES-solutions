const s = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const chars = s.split("").sort();
const results = [];
const used = new Array(chars.length).fill(false);

function permute(current) {
  if (current.length === chars.length) {
    results.push(current);
    return;
  }
  for (let i = 0; i < chars.length; i++) {
    if (used[i]) continue;
    if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;
    used[i] = true;
    permute(current + chars[i]);
    used[i] = false;
  }
}

permute("");
console.log(results.length);
console.log(results.join("\n"));
