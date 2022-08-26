const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);

const x = person;  
//Objects are mutable: They are addressed by reference, not by value.
// Will not create a copy of person.
//The object x is not a copy of person. It is person. Both x and person are the same object.
//Any changes to x will also change person, because x and person are the same object.
console.log(x);
x.age = 40;
console.log(person);

const student = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  var txt;
  for (let x in student) {
    txt += student[x];
  }
  console.log(txt);