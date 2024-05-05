// 933. Number of Recent Calls

const RecentCounter = function () {
  this.queue = [];
  this.limit = 3000;
};

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);

  while (this.queue.length > 0 && this.queue[0] < t - this.limit) {
    this.queue.shift();
  }

  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const counter = new RecentCounter();
console.log(counter.ping(1));
console.log(counter.ping(100));
console.log(counter.ping(3001));
console.log(counter.ping(3002));
