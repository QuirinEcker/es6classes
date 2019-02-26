const Person = module.require("./Person");
const Teacher = module.require("./Teacher");
const Student = module.require("./Student");

let p = new Person("Richard", "Roe", "male", ["reading"]);
let t = new Teacher("Jane", "Doe", "female", [], "programming");
let s = new Student("John", "Smith", "male", ["cooking", "swimming", "travelling"], "history");

p.sayHello()
p.tellHobbies()

console.log("");

t.sayHello();
t.tellHobbies()

console.log("");

s.sayHello();
s.tellHobbies()