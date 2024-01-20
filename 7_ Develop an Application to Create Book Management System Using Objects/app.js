class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


const person1 = new Person('John', 'Doe')
console.log(person1.getFullName());


// object literals
const person = {
    firstName: 'Ali',
    lastName: 'Khaild',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};


console.log(person.getFullName());