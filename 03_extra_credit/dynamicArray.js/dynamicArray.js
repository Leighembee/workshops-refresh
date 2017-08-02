class DynamicArray {
  constructor () {
    this.length = 0;
    this.data = new Uint8Array(2);
  }

  append (value) {
    if (this.length >= this.data.length) {
      const nextData = new Uint8Array(this.data.length * 2);
      for (let i = 0; i < this.data.length; i++) {
        nextData[i] = this.data[i];
      }
      this.data = nextData;
    }
    this.data[this.length] = value;
    this.length++;
  }

  get (index) {
    if (index > this.data.length - 1) {
      throw new Error('Out of bounds access!');
    }
    return this.data[index];
  }
}
