function mapTotals(number) {
  let output = "";
  let last = number[0];
  let cursor = 0;
  let count = 0;

  while (cursor < number.length) {
    if (last !== number[cursor]) {
      output += count + last;
      last = number[cursor];
      count = 0;
    }

    cursor++;
    count++;
  }

  output += count + last;
  return output;
}

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  let output = "1";

  for (let i = 1; i < n; i++) {
    output = mapTotals(output);
  }

  return output;
};

// 4 -> 1211

module.export = { countAndSay };
