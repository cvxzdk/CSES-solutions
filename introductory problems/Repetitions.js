const s = require("fs").readFileSync("/dev/stdin", "utf8").trim();

let maxLen = 1;
let curLen = 1;

for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
        curLen++;
        if (curLen > maxLen) maxLen = curLen;
    } else {
        curLen = 1;
    }
}

console.log(maxLen);
