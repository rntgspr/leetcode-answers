// 872. Leaf-Similar Trees

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  function collectLeaves(node, leaves) {
    if (!node) return;
    if (!node.left && !node.right) {
      leaves.push(node.val);
    } else {
      collectLeaves(node.left, leaves);
      collectLeaves(node.right, leaves);
    }
  }

  const leaves1 = [];
  const leaves2 = [];
  collectLeaves(root1, leaves1);
  collectLeaves(root2, leaves2);

  return (
    leaves1.length === leaves2.length &&
    leaves1.every((val, idx) => val === leaves2[idx])
  );
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root1 = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(9), new TreeNode(8))
);

const root2 = new TreeNode(
  3,
  new TreeNode(5, new TreeNode(6), new TreeNode(7)),
  new TreeNode(
    1,
    new TreeNode(4),
    new TreeNode(2, new TreeNode(9), new TreeNode(8))
  )
);

console.log(leafSimilar(root1, root2));
