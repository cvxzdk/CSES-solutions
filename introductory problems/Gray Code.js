const n = parseInt(require("fs").readFileSync("/dev/stdin", "utf8").trim());

let gray = ["0", "1"];

for (let i = 1; i < n; i++) {
  const first = gray.map((s) => "0" + s);
  const second = [...gray].reverse().map((s) => "1" + s);
  gray = [...first, ...second];
}

console.log(gray.join("\n"));
