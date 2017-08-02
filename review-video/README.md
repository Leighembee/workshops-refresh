http://wesbos.com/let-vs-const/

# Test-first Data Structures

*NOTE: you are encouraged to follow the workshop text for this repo, which covers the following in greater detail.*

---

Abstract Data Types (ADTs) are purely conceptual entities comprising information and allowed operations on that information. Data Structures (DSs) are actual programmatic solutions to implement an ADT. Both are very important to computer science in general and also a great way to better understand Object-Oriented Programming (OOP).

In this workshop, we are going to be writing the JavaScript implementations of some different ADTs and DSs, including Queues, Linked Lists, Hash Tables and Binary Search Trees.

## Running

Assuming you have Testem globally installed (`npm install -g testem`), simply run `npm test` in this project's root directory to test all suites at once. You can also run `testem` from inside a folder to test just that suite.

### The Queue ADT

You may **not** use JavaScript's built in `push`/`pop`/`shift`/`unshift` functions, nor any other `Array.prototype` methods, nor `.length`. You may use an Object or Array to store your data and keep `head` and `tail` pointers (variables) that change when functions like `enqueue` and `dequeue` are called.

Since a Queue is an ADT, it has more than one DS which can be used to solve it. When you're done with your Linked List, try returning to this suite and using your Linked List class (copy it over) to implement the Queue.

### The Linked List DS

The LL operations are far easier to understand and account for if you diagram out the possible cases step-by-step with pencil and paper.

Compare the LL to the classic contiguous fixed Array (which does not exist in ES5 JavaScript). What are the pros and cons of each, and why?

### Binary Search Tree DS

BSTs are highly recursive structures — many of your methods should employ recursion.

### Hash Table DS

Keeping track of what is going where and how to access it in this suite may be tricky. Good variable and property names will be especially helpful here; try to keep things clear.
