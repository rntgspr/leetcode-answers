const wordToMap = (word = "") =>
  word.split("").reduce((result, item) => {
    result.set(item, (result.get(item) || 0) + 1);
    return result;
  }, new Map());

const isAnagram = (word, anagram) => {
  if (word.length !== anagram.length) return false;

  const wordMap = wordToMap(word);
  const anagramMap = wordToMap(anagram);
  const allKeys = [
    ...new Set([...wordMap.keys(), ...anagramMap.keys()]).values()
  ];

  for (let i in allKeys) {
    const element = allKeys[i];
    if (wordMap.get(element) !== anagramMap.get(element)) {
      return false;
    }
  }

  return true;
};

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

module.export = { isAanagram };
