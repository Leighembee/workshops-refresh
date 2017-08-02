'use strict';

function Node (value, prev, next) {
  this.value = value;
  this.next = next || null;
  this.previous = prev || null;
}

function LinkedList () {}

LinkedList.prototype.addToTail = function(val) {
  var newNode = new Node(val, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return;
  var oldVal = this.tail.value;
  this.tail = this.tail.previous;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return oldVal;
};

// head methods are exact reverses of tail methods

LinkedList.prototype.addToHead = function(val) {
  var newNode = new Node(val, null, this.head);
  if (this.head) this.head.previous = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return;
  var oldVal = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.previous = null;
  else this.tail = null;
  return oldVal;
};

function isFn (maybeFunc) { return typeof maybeFunc === 'function'; }

LinkedList.prototype.search = function(predicate) {
  var correct = isFn(predicate) ? predicate : function(value){
    return value === predicate;
  };
  var currentNode = this.head;
  while (currentNode) {
    if (correct(currentNode.value)) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};
