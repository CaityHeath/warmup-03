'use strict';

let Node = require('./node.js');

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
    this.legth++;
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

let st = new Stack();
st.push(2);
st.push(4);
st.push('c');
st.push('d');
st.push(6);

print(st);