describe('binarySearchTree', function() {
  var tree,
      testArr,
      valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

  beforeEach(function() {
    tree = new BinarySearchTree(20);
    testArr = [];
  });

  it('has methods named `insert`, `contains`, `depthFirstForEach`, and others', function() {
    expect(typeof tree.insert).toBe('function');
    expect(typeof tree.contains).toBe('function');
    expect(typeof tree.depthFirstForEach).toBe('function');
    expect(typeof tree.breadthFirstForEach).toBe('function');
    expect(typeof tree.size).toBe('function');
  });

  it('takes values and report size correctly', function () {
    tree.insert(12);
    expect(tree.size()).toBe(2);
  });

  it('makes nodes on the correct branches', function () {
    tree.insert(12);
    tree.insert(22);
    expect(tree.left.value).toBe(12);
    expect(tree.right.value).toBe(22);
  });

  it('sorts values when adding', function() {
    expect(tree.value).toBe(20);
    tree.insert(15);
    expect(tree.left.value).toBe(15);
    tree.insert(25);
    expect(tree.right.value).toBe(25);
    tree.insert(5);
    expect(tree.left.left.value).toBe(5);
    tree.insert(17);
    tree.insert(21);
    tree.insert(28);
    tree.insert(0);
    tree.insert(14);
    tree.insert(50);
    tree.insert(1);
    tree.insert(45);
    tree.insert(13);
    tree.insert(12);
    tree.insert(11);
    expect(tree.left.left.right.left.left.left.value).toBe(11);
    tree.insert(30);
    tree.insert(35);
    tree.insert(33);
    tree.insert(31);
    tree.insert(34);
    expect(tree.right.right.right.left.left.right.left.right.value).toBe(34);
  });

  it('returns true if `contains` is passed a value in the tree', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    valuesToInsert.forEach(function(value){
        expect(tree.contains(value)).toBe(true);
    });
  });

  it('returns false if `contains` is passed a value not in the tree', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    [6, 23, 37, 51].forEach(function(value){
        expect(tree.contains(value)).toBe(false);
    });
  });

  // obvious advantage: values are processed respecting their comparative order
  it('runs depth-first (in "in-order" traversal) when depthFirstForEach() is run with no option or "in-order" option', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    tree.depthFirstForEach(function(val){ testArr.push(val); });
    expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
    testArr = [];
    tree.depthFirstForEach(function(val){ testArr.push(val); }, 'in-order');
    expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
  });

  // one use case: copying a tree (processes roots first)
  it('runs depth-first (in "pre-order" traversal) when depthFirstForEach() is run with "pre-order" option', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    tree.depthFirstForEach(function(val){ testArr.push(val); }, 'pre-order');
    expect(testArr).toEqual([20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31, 34]);
  });

  // one use case: deleting a tree (processes leaves first)
  it('runs depth-first (in "post-order" traversal) when depthFirstForEach() is run with "post-order" option', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    tree.depthFirstForEach(function(val){ testArr.push(val); }, 'post-order');
    expect(testArr).toEqual([ 1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25, 20 ]);
  });

  // helpful when tree levels have meaning (org chart? DOM elements?)
  it('runs breadth-first when breadthFirstForEach() is run', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    var depth = [];
    tree.breadthFirstForEach(function(val){ depth.push(val); });
    expect(depth).toEqual([20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34]);
  });
});
