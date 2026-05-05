class StackWithArray {
  constructor() {
    this.stack = [];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }
  traverse() {
    let result = [];
    for (let i = this.stack.length - 1; i >= 0; i--) {
      result.push(this.stack[i]);
      if (i !== 0) {
        result.push("->");
      }
    }
    console.log(result.join(" "));
    return result;
  }
}
const stack = new StackWithArray();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Top element:", stack.peek());
stack.traverse();
console.log("Popped element:", stack.pop());
stack.traverse();