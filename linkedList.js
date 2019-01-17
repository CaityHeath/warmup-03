let Node = require('./node.js');

class LinkedList{
  constructor(){
    this.head = null;
  }
  append(value){
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

function print(ll){
  let current = ll.head;
  while(current){
    console.log(current.value);
    current = current.next;
  }
  return;
}

let link = new LinkedList();
link.append(6);
link.append(2);
link.append('c');

print(link);
