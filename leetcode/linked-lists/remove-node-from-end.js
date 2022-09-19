/** */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  return {
    val: val === undefined ? 0 : val,
    next: next === undefined ? null : next,
  };
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  console.log("head", head, n);
  let i = n;
  let p = head;
  let o = {};
  let f = null;
  while (p) {
    f = { val: p.val, next: null };
    o = f;
    f = o.next;
    console.log("node", o);
    // o.push(p.val);
    if (i === 0) {
      p = p.next.next;
    } else {
      p = p.next;
    }

    i--;
  }
  console.log("o", JSON.stringify(o, null, 2));
  return { head: o };
};

const list = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 1,
      next: {
        val: 9,
        next: null,
      },
    },
  },
};

const tests = [[list, 1]];

tests.forEach((item) =>
  console.log("---->", item, removeNthFromEnd(...item), JSON.stringify(list))
);

module.exports = { tests, removeNthFromEnd };
