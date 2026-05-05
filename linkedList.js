// ============== Single Linked List ==============

class SingleList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    append(value){
        const newNode = { value, next: null };
        if (this.isEmpty()) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    prepend(value){
        const newNode = { value, next: this.head };
        this.head = newNode;
        this.size++;
    }
    printList(){
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            if (current.next) {
                result.push("->");
            }
            current = current.next;
        }
        console.log(result.join(" "));
        return result;
    }
    remove(index){
        if (this.isEmpty()) {
            return "List is empty";
        }
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (!current.next) {
                return "Index out of bounds";
            }
            current = current.next;
        }
        if (!current.next) {
            return "Index out of bounds";
        }
        current.next = current.next.next;
        this.size--;
    }
    insertAt(value, index){
        if (index < 0 || index > this.size) {
            return "Index out of bounds";
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.size) {
            this.append(value);
            return;
        }
        const newNode = { value, next: null };
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

}
console.log("======================= Single Linked List =======================")
const SingleLinkedList = new SingleList();
SingleLinkedList.append(1);
SingleLinkedList.append(9);
SingleLinkedList.append(3);
SingleLinkedList.printList();
SingleLinkedList.prepend(0);
SingleLinkedList.printList();
SingleLinkedList.remove(2);
SingleLinkedList.printList();
SingleLinkedList.insertAt(5, 2);
SingleLinkedList.printList();

// ================ Double Linked List ================

class DoubleList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    append(value){
        const newNode = { value, next: null, prev: null };
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    prepend(value){
        const newNode = { value, next: null, prev: null };
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    insertAt(value, index){
        if (index < 0 || index > this.size) {
            return "Index out of bounds";
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.size) {
            this.append(value);
            return;
        }
        const newNode = { value, next: null, prev: null };
        let current = this.head;    
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
        this.size++;
    }
    printList(){
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            if (current.next) {
                result.push("->");
            }
            current = current.next;
        }
        console.log(result.join(" "));
        return result;
    }
    remove(index){
        if (this.isEmpty()) {
            return "List is empty";
        }
        if (index < 0 || index >= this.size) {
            return "Index out of bounds";
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        if (current.prev) {
            current.prev.next = current.next;
        } else {
            this.head = current.next;
        }
        if (current.next) {
            current.next.prev = current.prev;
        } else {
            this.tail = current.prev;
        }
        this.size--;
    }

}
console.log("======================= Double Linked List =======================")
const doubleLinkedList = new DoubleList();
doubleLinkedList.append(1);
doubleLinkedList.append(9);
doubleLinkedList.append(3);
doubleLinkedList.printList();
doubleLinkedList.prepend(0);
doubleLinkedList.printList();

export default {    SingleList,    DoubleList};