'use strict';

// using an array to implement

function Queue () {
  this.data = [];
  this.head = this.tail = 0;
}

Queue.prototype.enqueue = function(element) {
 this.data[this.tail] = element;
 this.tail++;
};

// with amortized garbage collection
Queue.prototype.dequeue = function() {
  if (!this.size()) return;
  var value = this.data[this.head++];
  if (this.head > 99) {
    this.data = this.data.slice(this.head);
    this.tail = this.tail - this.head;
    this.head = 0;
  }
  return value;
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};

// // using a LL to implement

// function Queue () {
//   this.data = new LinkedList();
// }

// Queue.prototype.enqueue = function(val) {
//   this.data.addToTail(val);
// };

// Queue.prototype.dequeue = function() {
//   return this.data.removeHead();
// };

// // even better would be to simply keep count on every enqueue/dequeue, then reporting size would be a constant-time operation (instead of re-counting all nodes every time we ask for size)
// Queue.prototype.size = function() {
//   // this function should really be on LinkedList.prototype.size
//   var count = 0;
//   var current = this.data.head;
//   while (current) {
//     count++;
//     current = current.next;
//   }
//   return count;
// };
