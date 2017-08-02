class Queue {

    constructor() {
        this.list = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(v) {
        this.list[this.tail] = v;
        this.tail++;
    }

    dequeue() {
        const element = this.list[this.head];
        if (!element) return;
        this.head++;
        return element;
    }

    size() {
        return this.tail - this.head;
    }

}

class QueueLinkedList {

    constructor() {
        this.list = new LinkedList();
    }

    enqueue(v) {
        this.list.addToTail(v);
    }

    dequeue() {
        return this.list.removeHead();
    }

    size() {
        return this.list.size();
    }

}
