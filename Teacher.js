const Person = module.require("./Person")

class Teacher extends Person {
    constructor(firstName, lastName, gender, hobbies, subject) {
        super(firstName, lastName, gender, hobbies);
        this.subject = subject;
    }

    sayHello() {
        if (this.gender == "female") {
            console.log(`Hello. My name is Mrs. ${this.name.last} and I teach ${this.subject} `)
        } else {
            console.log(`Hello. My name is Mr. ${this.name.last} and I teach ${this.subject} `)
        }
    }
}

module.exports = Teacher;