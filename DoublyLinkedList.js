/**
Complete the following DoublyLinkedList
**/


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        // code here
        var newNode = new Node(val);
        
        var currentHead = this.head;
        var currentTail = this.tail;

        if(currentHead === null) {
            this.head = newNode;
        }
        
        if (currentTail !== null) {
            newNode.prev = currentTail;
            currentTail.next = newNode;
        }
     
        this.tail = newNode;
        this.length++;
        return this;
    } 
    pop(){
        // code here
        var currentTail = this.tail;
        if(currentTail === null) return this;
        
        var currentTailPrev = currentTail.prev;
        
        if(currentTailPrev === null) {
            this.tail = null;
        } else {
            currentTailPrev.next = null;
            this.tail = currentTailPrev;
        }
        
        this.length--;
        
        if(this.length === 0) {
            this.head = null;
        }
        
        return this;
    }
    shift(){
        // code here
        var currentHead = this.head;
        if(currentHead === null) return this;

        var currentHeadNext = currentHead.next;
         
        if(currentHeadNext === null) {
            this.head = null;
        } else {
            currentHeadNext.prev = null;
            this.head = currentHeadNext;
        }

        this.length--;
        
        if(this.length === 0) {
            this.tail = null;
        }
        
        return this;
        
    }
    unshift(val){
        // code here
         var newNode = new Node(val);
        
        var currentHead = this.head;
        var currentTail = this.tail;
        
        if (currentHead !== null) {
            newNode.next = currentHead;
            currentHead.prev = newNode;
        }
        if(currentTail === null) {
            this.tail = newNode
        }
        
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        // code here
        if(index > this.length) return undefined;
        var currentIndex = 1;
        var currentNode = this.head;
        while (true) {
            if(currentIndex === index) return currentNode;

            currentNode = currentNode.next;
            currentIndex++;
        }
    }
    set(index, val){
      // code here
        var currentNode = this.get(index);
        if(!currentNode) return undefined;
        currentNode.val = val;
        return this;
    }
    insert(index, val){
      // code here
        if(index > this.length + 1) return undefined;
        
        var currentNode = this.get(index);
        var newNode = new Node(val);
        if(currentNode) {
            newNode.prev = currentNode.prev;
            currentNode.prev = newNode;
            newNode.next = currentNode;
        }
        
        if(index === 1) {
            this.head = newNode;
        }
        
        if(index === this.length + 1) {
            this.tail = newNode;
        }

        if (index === this.length) {
            var currentTail = this.tail;
            currentTail.prev = newNode;
        }
        
        this.length++;
        return this;
        
    }
}
