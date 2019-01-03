'use strict';

const LinkedList = require('./lib/linked-list.js');

let list = new LinkedList();
list.append(1);
list.append(64);
list.append(1);
list.append(100);
list.append(65);


function printList(ll){
  let current = ll.head;
  while(current){
    console.log(current.value);
    current = current.next;
  }
}

printList(list);