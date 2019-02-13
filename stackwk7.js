'use strict'

class Stack {
  constructor(){
    this.top = null;
    this.next = null;
    this.length = 0;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop(){
    let temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp.value;

  }

  peek(){
    return this.top.value;
  }
}


function print(stack){
  let temp;
  while(stack.top){
    temp = stack.pop();
    console.log(temp);
  }
  return;
}