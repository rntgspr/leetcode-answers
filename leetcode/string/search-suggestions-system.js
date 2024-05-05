/*
You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of
searchWord is typed. Suggested products should have common prefix with searchWord. If there are
more than three products with a common prefix return the three lexicographically minimums
products.

Return a list of lists of the suggested products after each character of searchWord is typed.

Example 1:
Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].

Example 2:
Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Explanation: The only word "havana" will be always suggested while typing the search word.

Constraints:
1 <= products.length <= 1000
1 <= products[i].length <= 3000
1 <= sum(products[i].length) <= 2 * 104
All the strings of products are unique.
products[i] consists of lowercase English letters.
1 <= searchWord.length <= 1000
searchWord consists of lowercase English letters.
*/
/**
 * 1268. Search Suggestions System
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  let sorted = products.sort();
  let responses = [];

  let typed = "";
  for (let i = 0; i < searchWord.length; i++) {
    const char = searchWord[i];
    typed += char;

    const filtered = sorted
      .filter((item) => item.startsWith(typed))
      .slice(0, 3);
    responses.push(filtered);
  }

  return responses;
};

const given = [
  [["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"],
  [["havana"], "havana"],
];

console.log(suggestedProducts(...given[0]));
console.log(suggestedProducts(...given[1]));

///////

const alphabet = "abcdefghijklmnopqrstuvwxyz";
function generateRandomWords(numWords, maxWordLength) {
  let words = [];

  for (let i = 0; i < numWords; i++) {
    let wordLength = Math.floor(Math.random() * maxWordLength) + 1;
    let word = "";
    for (let j = 0; j < wordLength; j++) {
      word += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    words.push(word);
  }

  return words;
}

function generateSearchWord(maxLength) {
  let searchWord = "";
  let searchWordLength = Math.floor(Math.random() * maxLength) + 1;

  for (let i = 0; i < searchWordLength; i++) {
    searchWord += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return searchWord;
}

// Example usage:
let products = generateRandomWords(10, 8); // Generate 10 products with each up to 8 letters long
let searchWord = generateSearchWord(5); // Generate a search word up to 5 letters long

console.log(suggestedProducts(products, searchWord));
