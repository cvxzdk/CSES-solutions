const s = require("fs").readFileSync("/dev/stdin", "utf8").trim();

// Count frequencies
const freq = {};
for (const ch of s) {
  freq[ch] = (freq[ch] || 0) + 1;
}

// Find odd-frequency characters
const oddChars = Object.keys(freq).filter((ch) => freq[ch] % 2 !== 0);

// Palindrome requires at most one odd-frequency character
if (oddChars.length > 1) {
  console.log("NO SOLUTION");
} else {
  let left = "";
  let middle = "";

  for (const ch of Object.keys(freq).sort()) {
    if (freq[ch] % 2 !== 0) {
      // This char goes in the middle
      middle = ch;
    }
    // Take half (floor) of each char for the left side
    left += ch.repeat(Math.floor(freq[ch] / 2));
  }

  const right = left.split("").reverse().join("");
  console.log(left + middle + right);
}
