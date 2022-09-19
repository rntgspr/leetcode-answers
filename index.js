const Benchmark = require("benchmark");

// const singleNumber = require("./leetcode/array/single-number");
// const intersectionTwoSortedArrays2 = require("./leetcode/array/intersection-two-arrays-2");
// const rotateImage = require("./leetcode/array/rotate-image");
// const countPrimes = require("./leetcode/math/count-primes");
// const twoSum = require("./leetcode/array/two-sum");
// const deleteNode = require("./leetcode/linked-lists/delete-node");
const removeNthFromEnd = require("./leetcode/linked-lists/remove-node-from-end");

const rinha = {
  // ...singleNumber,
  // ...intersectionTwoSortedArrays2
  // ...rotateImage,
  // ...countPrimes,
  // ...deleteNode,
  ...removeNthFromEnd,
};

const suite = new Benchmark.Suite();

Object.keys(rinha)
  .reduce((result, item) => {
    if (item !== "tests") {
      console.log("testing:", item);
      result.add(item, function () {
        rinha[item](...rinha.tests);
      });
    }
    return result;
  }, suite)
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
