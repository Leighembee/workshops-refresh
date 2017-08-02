function QueueCirc(length) {
  this.data = new Uint8Array(length);
  this.read = 0;
  this.write = 0;
  this.size = 0;
}

QueueCirc.prototype.enqueue = function(val) {
  if (typeof val !== 'number') {
    throw new Error('You can only add numbers to this queue!');
  } else if (val < 0 || val > 255) {
    throw new Error('Number must be between 0 and 255, inclusive');
  }
  if (this.size < this.data.length) {
    this.data[this.write] = val;
    this.write = (this.write + 1) % this.data.length;
    this.size += 1;
  } else {
    throw new Error('Queue is full!');
  }
};

QueueCirc.prototype.dequeue = function() {
  if (this.size === 0) {
    throw new Error('Nothing in the queue!');
  }
  var returnVal = this.data[this.read];
  this.read = (this.read + 1) % this.data.length;
  this.size -= 1;
  return returnVal;
};
