'use strict';

let Node = require('./node.js')

class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.next = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    }
    else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  
  dequeue() {
    if (!this.front) {
      return false;
    }
    else {
      let dequeuedItem = this.front;
      this.front = dequeuedItem.next;
      dequeuedItem.next = null;
      return dequeuedItem.value;
    }
  }

}



function print(q){
  console.log(q);
  let temp;
  while(q.front){
    temp = q.dequeue();
    console.log(temp);
  }
  return;
}

let que = new Queue();
que.enqueue('🤡');
que.enqueue('🌝');
que.enqueue('👽');
que.enqueue('🐉');
que.enqueue('🐇');

print(que);