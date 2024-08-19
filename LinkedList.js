function node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    }
}

class LinkedList {
    
    constructor() {
        this.head = null
        this.currentNode = null
        this.headNode = null
    }

    append(value) {
        if(this.head === null) {
            this.head = new node(value)
            this.currentNode = this.head
            this.headNode = this.head
        }
        else {
            const temp = new node(value)
            this.currentNode.nextNode = temp
            this.currentNode = temp
        }
    }

    prepend(value) {

        if(this.head === null) {
            this.head = new node(value)
            this.currentNode = this.head
            this.headNode = this.head
        }
        else {
            const temp = new node(value)
            temp.nextNode = this.headNode
            this.headNode = temp
        }
    }

    size() {
        let total = 0
        let temp = this.headNode
        while(temp != null) {
            total += 1
            temp = temp.nextNode
        }
        return total
    }

    head() {
        return this.headNode
    }

    tail() {
        let temp = this.headNode
        while(temp.nextNode != null) {
            temp = temp.nextNode
        }
        return temp
    }

    at(index) {
        let temp = this.headNode
        if(index > this.size()) {
            return ("index out of bound....")
        }
        else {
            for(let i = 0; i < index; i++) {
                temp = temp.nextNode
            }
            return temp
        }
    }

    pop() {
        let temp = this.headNode
        let prev = temp
        while(temp.nextNode != null) {
            prev = temp
            temp = temp.nextNode
        }
        delete temp.value
        delete temp.nextNode
        prev.nextNode = null
    }

    contains(value) {
        let temp = this.headNode
        while(temp != null) {
            if(value === temp.value) {
                return true
            }
            temp = temp.nextNode
        }
        return false
    }

    find(value) {
        let temp = this.headNode
        let index = 0
        while(temp != null) {
            if(value === temp.value) {
                return index
            }
            index += 1
            temp = temp.nextNode
        }

        return null
    }

    inserAt(value, index) {
        if(index > this.size()) {
            console.log("index out of bound ! plz enter valid index")
        }
        else {
            if(index === 0) this.prepend(value)
            else {
                let temp = this.headNode
                for(let i = 0; i < index - 1 ; i++) {
                    temp = temp.nextNode
                }
                let current = new node(value)
                current.nextNode = temp.nextNode
                temp.nextNode = current
            }
        } 
    }

    removeAt(index) {
        if(index > this.size()) {
            console.log("index out of bound ! plz enter valid index")
        }
        else {
            let temp = this.headNode
            for(let i = 0; i < index - 1; i++) {
                temp = temp.nextNode
            }
            let del = temp.nextNode
            temp.nextNode = del.nextNode
            delete del.value
            delete del.nextNode
        }
    }

    toString() {
        let temp = this.headNode
        let list = ''
        while(temp != null) {
            list = list + `( ${temp.value} ) -> `
            temp = temp.nextNode
        }
        list = list + 'null'
        return list
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())
