class Stack {
    constructor() {
        this.a = [];
        this.s = new Map();
    }
    push(v) {
        this.s.set(v, (this.s.get(v) || 0) + 1);
        this.a.push(v);
    }
    pop() {
        if (this.a.length == 0)
            return undefined;
        const v = this.a.pop();
        this.s.set(v, this.s.get(v) - 1);
        return v;
    }
    search(v) {
        return this.s.get(v) > 0;
    }
}

const s = new Stack();
s.push(10);
console.log(s.search(21));
s.push(13);
s.push(41);
s.pop();
console.log(s.search(10));
console.log(s.search(41));