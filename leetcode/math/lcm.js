function lcm(a, b) {
  for (let i = 1; i <= a * b; i++) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}

// console.log(lcm(15, 70));
// console.log(lcm(19, 197));
