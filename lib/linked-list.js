'use strict';

const Node = require('./node.js');

class LinkedList{
  constructor(){
    this.head = null;
  }

  append(value){
    if(typeof value !== 'number'){
      throw new TypeError('value must be a number');
    }
    if(!this.head){
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = new Node(value);
  }

}

module.exports = LinkedList;
