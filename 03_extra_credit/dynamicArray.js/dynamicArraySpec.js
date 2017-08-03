describe('A dynamic array', function() {
  var array;

  beforeEach(function() {
    array = new DynamicArray();
  });

  it('should be implemented with a Uint8Array typed array', function() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array#Examples
    expect(array.data instanceof Uint8Array).toBe(true);
  });

  it('should start with an array of size 2', function() {
    expect(array.data.length).toBe(2);
  });

  it('has an append method', function() {
    expect(array.append).toEqual(jasmine.any(Function));
  });

  describe('length property', function() {
    it('should start with a length of 0', function() {
      expect(array.length).toBe(0);
    });
  });

  describe('Insert method', function() {
    it('should grow the length of the array', function() {
      array.append(10);
      expect(array.length).toBe(1);

      array.append(11);
      expect(array.length).toBe(2);
    });

    it('should double the capacity of the array when the array is full', function() {
      array.append(87);
      array.append(7);
      array.append(65);

      expect(array.length).toBe(3);
      expect(array.data.length).toBe(4);

      array.append(878);
      array.append(3);

      expect(array.length).toBe(5);
      expect(array.data.length).toBe(8);
    });

  });

  describe('Get method', function() {
    it('should return a value in the array by index', function() {
      array.append(87);
      array.append(7);

      expect(array.get(0)).toBe(87);
      expect(array.get(1)).toBe(7);
    });
  });

  describe('Edge cases', function() {
    it('should copy the existing array values when the array capacity grows', function() {
      array.append(87);
      array.append(7);
      array.append(65);

      expect(array.length).toBe(3);
      expect(array.data.length).toBe(4);

      array.append(878);
      array.append(3);

      expect(array.length).toBe(5);
      expect(array.data.length).toBe(8);

      expect(array.get(0)).toBe(87);
      expect(array.get(1)).toBe(7);
      expect(array.get(2)).toBe(65);
    });

    it('should throw an error for out of bounds access', function() {
      expect(function() { array.get(1); }).not.toThrow(new Error('Out of bounds access!'));
      expect(function() { array.get(2); }).toThrow(new Error('Out of bounds access!'));
      expect(function() { array.get(300); }).toThrow(new Error('Out of bounds access!'));
    });
  });
});
