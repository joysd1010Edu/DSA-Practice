// ============== Single Linked List ==============

class SingleLinkedList{
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

const linkedList = new SingleLinkedList();
linkedList.append(1);
linkedList.append(9);
linkedList.append(3);
linkedList.printList();
linkedList.prepend(0);
linkedList.printList();
linkedList.remove(2);
linkedList.printList();
linkedList.insertAt(5, 2);
linkedList.printList();