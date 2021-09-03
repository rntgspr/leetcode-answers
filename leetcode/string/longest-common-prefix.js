/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strings) {
  if (strings === null || strings.length === 0) return "";

  let word = 0;
  let cursor = 0;
  let prefix = "";
  let last = "";
  while(strings[word].indexOf(prefix) > -1 && strings[word][cursor]) {
    if (!strings[word]) return "";

    if (last && last !== strings[word][cursor]) {
      return prefix;
    };

    last = strings[word][cursor];

    if (strings[word+1] === undefined) {
      prefix += strings[word][cursor];
      last = "";
      word = 0;
      cursor++;
    } else {
      word++;
    }
  }

  return prefix;
};

// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));
// console.log(longestCommonPrefix(["cringe","criminoso","criatura"]));
// console.log(longestCommonPrefix(["aacccqweqsg","aacccqwesg","aacccccccaaaaaasdsg"]));
// console.log(longestCommonPrefix(["a"]));
// console.log(longestCommonPrefix(["cir", "car"]));
// console.log(longestCommonPrefix(["abab", "aba", ""]));


module.export = { longestCommonPrefix };
