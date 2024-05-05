/**
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known
as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These
are the only nodes with twins for n = 4.

The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum
of the linked list.

Example 1:
Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 

Example 2:
Input: head = [4,2,2,3]
Output: 7
Explanation:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7.

Example 3:
Input: head = [1,100000]
Output: 100001
Explanation:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.
 

Constraints:
The number of nodes in the list is an even integer in the range [2, 105].
1 <= Node.val <= 105
 */
/**
 * 2130. Maximum Twin Sum of a Linked List
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function (head) {
  let max = 0;
  let nodes = [];
  let slowCount = 0;
  let fastCount = 1;
  let slow = head;
  let fast = head.next;
  while (slow !== null) {
    nodes[slowCount] = slow.val;
    slow = slow.next;
    fast = fast?.next?.next;

    if (fast?.val !== undefined) {
      fastCount += 1;
    } else {
      if (nodes[fastCount] !== undefined && nodes[slowCount] !== undefined) {
        max = Math.max(max, nodes[fastCount] + nodes[slowCount]);
      }
      fastCount--;
    }

    slowCount++;
  }

  return max;
};

const pairSumSlow = function (head) {
  let nodeCount = 0;
  let nodes = [];
  let current = head;
  let mapped = [];

  while (current !== null) {
    mapped.push({ nodeCount, value: current.val });
    nodes[nodeCount] = current.val;
    current = current.next;
    nodeCount++;
  }

  let max = -Infinity;
  for (let l = 0; l < nodes.length / 2; l++) {
    const r = nodes.length - l - 1;
    const left = nodes[l];
    const right = nodes[r];
    max = Math.max(max, left + right);
  }

  return max;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list1 = new ListNode(
  5,
  new ListNode(4, new ListNode(2, new ListNode(1)))
);
const list2 = new ListNode(
  4,
  new ListNode(2, new ListNode(2, new ListNode(3)))
);
const list3 = new ListNode(
  3,
  new ListNode(
    1,
    new ListNode(
      4,
      new ListNode(
        5,
        new ListNode(6, new ListNode(4, new ListNode(2, new ListNode(1))))
      )
    )
  )
);
const list4 = new ListNode(1, new ListNode(100000));
// console.log(pairSum(list1));
// console.log(pairSum(list2));
// console.log(pairSum(list3));
// console.log(pairSumSlow(list3));

console.log(pairSum(list4));
console.log(pairSumSlow(list4));
