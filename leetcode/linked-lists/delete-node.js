/** */
const deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
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

const tests = [[list.next], [list.next.next]];

tests.forEach((item) =>
  console.log("---->", item, deleteNode(...item), JSON.stringify(list))
);

module.exports = { tests, deleteNode };
