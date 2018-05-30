'use strict';

function Queue() {
  this.data = [];
}

Queue.prototype.enqueue = function(data) {
  return this.data.push(data);
}

Queue.prototype.dequeue = function() {
  return this.data.unshift();
}

Queue.prototype.peek = function() {
  return this.data.length;
}

module.exports = Queue;