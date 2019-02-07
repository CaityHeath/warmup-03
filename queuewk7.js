'use strict';

let Node = require('./node.js');

class Queue{
  constructor(){
    this.rear = null;
    this.front = null;
    this.next = null;
    this.length = 0;
  }

  enqueue(value){
    let node = new Node(value);

    if(!this.front){
      this.front = node;
      this.rear.node;
    }else{
      this.rear.next = node;
      this.rear = node;
    }
    this.length++;
  }

  dequeue(){
    if(!this.front){
      return false;
    }else{
      let dqItem = this.front;
      this.front = dqItem.next
      dqItem.next = null;
      return dqItem.value;
    }
  }
}

function print(q){
  let temp=q.front.value;
  while(q.front){
  console.log(temp);
  temp = q.dequeue();
  }
  return;
}