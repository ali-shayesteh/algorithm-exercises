/**
Please implement the find and contains to the following Binary Search Tree
**/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        // find the node based on the given value
        // return value should be the found node or undefined
        if(this.root === null) return undefined;
        var current = this.root;
        while(true){
            if(value === current.value) return current;
            if(value < current.value){
                if(current.left === null){
                    return undefined
                } else {
                    current = current.left;
                }
            } else {
                if(current.right === null){
                    return undefined;
                } else {
                    current = current.right;
                }
            }
        }
    }
    contains(value){
        // return true or false if the contains the given value or not
        return this.find(value) !== undefined;
    }
}
