const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let n = parseInt(lines[0]);

const result = [n];

while (n !== 1) {
  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = n * 3 + 1;
  }
  result.push(n);
}

console.log(result.join(' '));
