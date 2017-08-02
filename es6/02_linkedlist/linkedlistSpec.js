describe('A linked list', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = new LinkedList();
  });

  it('has methods `addToTail`, `removeHead`, and `search` (and maybe others?)', function() {
    expect(typeof linkedList.addToTail).toBe('function');
    expect(typeof linkedList.removeHead).toBe('function');
    expect(typeof linkedList.search).toBe('function');
  });

  it('starts with head and tail falsy', function () {
    expect(linkedList.head).toBeFalsy();
    expect(linkedList.tail).toBeFalsy();
    expect(linkedList.removeHead()).toBeFalsy();
  });

  it('has a Node class defined to represent a node', function() {
    expect(typeof Node).toBe('function');
    // There is already an object called `Node` in the browser.
    // This spec makes sure you've defined your OWN `Node`.
    expect(isNative(Node)).toBe(false);
    function isNative(fn) {
      return (/\{\s*\[native code]\s*\}/).test('' + fn);
    }
  });

  it('Node class should take a value argument and define next and previous to be null by default', function() {
    var node = new Node('test');
    expect(node.value).toBe('test');
    expect(node.next).toBe(null);
    expect(node.previous).toBe(null);
  });

  it('linkedlist should use Node class to add nodes', function() {
    linkedList.addToTail('first');
    expect(linkedList.tail instanceof Node).toBe(true);
  });

  it('if a single node is added to head, it should be set to head and tail', function() {
    linkedList.addToHead('first');
    expect(linkedList.head.value).toBe('first');
    expect(linkedList.head.next).toBeFalsy();
    expect(linkedList.head.previous).toBeFalsy();
    expect(linkedList.head).toBe(linkedList.tail);
  });

  it('should return the head on a removeHead', function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');
    expect(linkedList.removeHead()).toBe('first');
    expect(linkedList.removeHead()).toBe('second');
    expect(linkedList.removeHead()).toBe('third');
  });

  it('should make sure the previous of any newly appointed HEAD is null', function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');
    expect(linkedList.removeHead()).toBe('first');
    expect(linkedList.head.previous).toBe(null);
  });

  it('should make sure the next of any newly appointed TAIL is null', function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');
    expect(linkedList.removeTail()).toBe('third');
    expect(linkedList.tail.next).toBe(null);
  });

  it('should be able to add to head or tail', function() {
    linkedList.addToTail('second');
    linkedList.addToHead('first');
    linkedList.addToTail('third');
    expect(linkedList.removeHead()).toBe('first');
    expect(linkedList.removeHead()).toBe('second');
    expect(linkedList.removeHead()).toBe('third');
  });

  it('should return the tail on a removeTail', function() {
    linkedList.addToTail('second');
    linkedList.addToHead('third');
    linkedList.addToTail('first');
    expect(linkedList.removeTail()).toBe('first');
    expect(linkedList.removeTail()).toBe('second');
    expect(linkedList.removeTail()).toBe('third');
  });

  it('should remove head and tail when last node is removed', function() {
    expect(linkedList.removeHead()).toBeFalsy();
    linkedList.addToTail('one');
    expect(linkedList.removeHead()).toBe('one');
    expect(linkedList.removeHead()).toBeFalsy();
    expect(linkedList.head).toBeFalsy();
    expect(linkedList.tail).toBeFalsy();
  });

  it('should return the correct values for search', function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    linkedList.addToTail('three');
    linkedList.addToTail('four');
    linkedList.addToTail('one');
    expect(linkedList.search('two')).toBe('two');
    expect(linkedList.search('sdd')).toBe(null);
    expect(linkedList.search('one')).toBe('one');
    expect(linkedList.search('four')).toBe('four');
  });

  it('should be able to take strings and functions both as search inputs', function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    expect(linkedList.search(function(nodeValue) {
      return nodeValue === 'two';
    })).toBe('two');
  });

  // This spec demonstrates the utility of the previous spec.
  // If you are passing the last one correctly, this one should already pass!

  it('should therefore be able to store and search for objects, not just strings', function() {
    function UserNode(name, email, city) {
      this.name = name;
      this.email = email;
      this.city = city;
    }

    linkedList.addToHead(new UserNode('Nimit', 'nimit@fs.com', 'New York'));
    linkedList.addToHead(new UserNode('David', 'david@fs.com', 'New York'));
    linkedList.addToHead(new UserNode('Paul', 'paul@yc.com', 'Mountain View'));

    expect(linkedList.search(function (userNode) {
      return userNode.name === 'Nimit';
    }).email).toBe('nimit@fs.com');

    expect(linkedList.search(function (userNode) {
      return userNode.email === 'david@fs.com';
    }).city).toBe('New York');

    expect(linkedList.search(function (userNode) {
      return userNode.city === 'Mountain View';
    }).name).toBe('Paul');
  });

});