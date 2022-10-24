/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  s.reverse();
}

function reverseIt(word) {
  let nextWord = "";
  const size = word.length - 1;

  for (let i = 0; i <= size; i++) {
    nextWord += word[size - i];
  }

  return nextWord;
}

function reverseThat(word) {
  console.log("word");
  return word === "" ? "" : reverseThat(word.substr(1)) + word.charAt(0);
}

module.exports = { reverseString, reverseIt, reverseThat, tests: ["grama"] };
