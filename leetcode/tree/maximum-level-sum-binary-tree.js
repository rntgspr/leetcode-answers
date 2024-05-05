/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and
so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Example 1:
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
 
Constraints:
The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  if (!root) return 0;

  let nodex = [root.val];

  function back(node, level) {
    if (!node) return;

    if (nodex.length <= level) {
      nodex.push(0);
    }

    nodex[level] += node.val;

    const nextLevel = level + 1;
    back(node?.left, nextLevel);
    back(node?.right, nextLevel);
  }

  back(root, 0);

  const [, index] = nodex.reduce(
    (acc, item, i) => {
      let [total, ii] = acc;
      return item > total ? [(total = item), i] : [total, ii];
    },
    [-Infinity, 0]
  );

  return index + 1;
};

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Nível 5
const level5 = [];
for (let i = 0; i < 16; i++) {
  if (i === 0) {
    level5.push(null);
  } else {
    level5.push(new TreeNode(i % 2)); // Alternando entre 1 e 0
  }
}

// Nível 4
const level4Values = [8, 34, 0, 8, 8, 0, 0, 8];
const level4 = level4Values.map(
  (val, index) => new TreeNode(val, level5[2 * index], level5[2 * index + 1])
);

// Nível 3
const level3 = [
  new TreeNode(4, level4[0], level4[1]),
  new TreeNode(5, level4[2], level4[3]),
  new TreeNode(6, level4[4], level4[5]),
  new TreeNode(7, level4[6], level4[7]),
];

// Nível 2
const level2 = [
  new TreeNode(2, level3[0], level3[1]),
  new TreeNode(3, level3[2], level3[3]),
];

// Raiz e Nível 1
const tree2 = new TreeNode(1, level2[0], level2[1]);

const tree0 = new TreeNode(
  1,
  new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
  new TreeNode(0)
);

const tree1 = new TreeNode(
  989,
  null,
  new TreeNode(
    10250,
    new TreeNode(98693),
    new TreeNode(-89388, null, new TreeNode(-32127))
  )
);

// console.log(maxLevelSum(tree0));
console.log(maxLevelSum(tree2));
