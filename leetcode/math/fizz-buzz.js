/** */
function fizzBuzz(n) {
  let o = [];
  for (let i = 1; i < n + 1; i++) {
    let item = '';

    if (i % 3 === 0) {
      item = 'Fizz';
    }

    if (i % 5 === 0) {
      item = `${item}Buzz`;
    }

    item = item ? item : i.toString();
    o.push(item);
  }

  return o;
}

const tests = [
  [3], //
  [5], //
  [15], //
];

tests.forEach(item => console.log('---->\n', item, '\n', fizzBuzz(...item)));

module.exports = { tests, fizzBuzz };
