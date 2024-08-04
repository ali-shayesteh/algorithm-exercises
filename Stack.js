// implement the pop functionality



class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        // code here
 
        var lastNode = this.last;
        
        let count = 1
        var currentNode = this.first;
        var lastPrev;
        
        while ( count < this.size) {
            if(count === this.size - 1) {
                lastPrev = currentNode;
                break;
            }
            currentNode = currentNode.next
            count++
        }
        lastPrev.next = null;
        this.last = lastPrev;
        this.size--;

        return lastNode;
    }
}
