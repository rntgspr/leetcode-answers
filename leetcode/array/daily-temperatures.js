/*
Given an array of integers temperatures represents the daily temperatures, return an array answer
such that answer[i] is the number of days you have to wait after the ith day to get a warmer
temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]
 
Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100

*/
/**
 * 739. Daily Temperatures
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperaturesBig = function (temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    let j = i + 1;
    for (j; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        temperatures[i] = j - i;
        break;
      }
    }

    if (j === temperatures.length) {
      temperatures[i] = 0;
    }
  }

  return temperatures;
};

var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    console.log(`starting index: ${i}`);
    if (stack.length === 0) {
      console.log(`stack.length is empty:`);
    }

    if (temperatures[i] <= temperatures[stack[stack.length - 1]]) {
      console.log(
        `${temperatures[i]} is lower than ${
          temperatures[stack[stack.length - 1]]
        }`
      );
    }

    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      console.log(
        `comparing: :lastStack:${temperatures[stack[stack.length - 1]]} -> ${
          temperatures[i]
        }:current`
      );
      const idx = stack.pop();
      console.log(`removing ${idx}`);
      result[idx] = i - idx;
      console.log(`assuming: ${result[idx]} => result[${idx}]`);
    }

    stack.push(i);
    console.log("stack");
    console.log(stack);
    console.log("-------------------");
  }

  return result;
};

console.log(dailyTemperaturesBig([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
