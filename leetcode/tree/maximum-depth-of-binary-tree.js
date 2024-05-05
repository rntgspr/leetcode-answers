// 104. Maximum Depth of Binary Tree
/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node
down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
 

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

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
var maxDepth = function (root) {
  function backtrack(node) {
    if (!node) return;
    let left = backtrack(node?.left) ?? 0;
    let right = backtrack(node?.right) ?? 0;
    return Math.max(left, right) + 1;
  }

  return backtrack(root);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const given0 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

const given1 = new TreeNode(1, new TreeNode(2));

console.log(maxDepth(given0));
console.log(maxDepth(given1));
