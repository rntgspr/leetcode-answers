function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/** */
function countPrimesBrute(n) {
  if (n <= 2) return 0;

  let o = 0;
  for (let i = 3; i < n; i+=2) {
    if (isPrime(i)) o++;
  }

  return o + 1;
}

/** */
function countPrimes(n) {
  if (n <= 2) return 0;

  let p = new Array(n).fill(1);

  for (let i = 2; i * i <= n; i++) {
    if (!p[i]) continue;
    for (let j = i * i; j < n; j += i) {
      p[j] = 0;
    }
  }

  let o = 0;
  for (let i = 2; i < n; i++) {
    if (p[i]) o++;
  }

  return o;
}


const tests = [
  [5000000],
  // [499979], //
  // [499978], //
  // [2], //
  // [3], //
  // [10], //
  // [50], //
  // [100], //
  // [200], //
  // [10000], //
  // [20], //
  // [17], //
  // [11], //
  // [19], //
];

// tests.forEach(item => console.log('---->\n', item, '\n', countPrimes(...item)));

module.exports = { tests, countPrimes, countPrimesBrute };
