console.log("Hello World\n");
//ES5
console.log("*****************ES5****************");
function add(a, b){
    console.log('Additio of ',a, 'and ',b, 'is', a+b);
	console.log('Additio of '+ a +' and '+ b + ' is', a+b);
}
add(4, 6);

function sub(a, b){
	return a-b;
}
console.log('Subtration: '+ sub(4, 6)); //return string
console.log('Subtration:',sub(4, 6)); //return integer means correct value

//ES6
const sum = function(a, b){
	return a+b;
}
console.log("Addition is:", sum(8, 7));

//arrow function
const sum1 = (a, b) => {
	return a+b;
}
console.log("Addition is:", sum1(8, 7));

//if the body of the function contains only one statement
// by defult it will return so we don't need to write return keyword
const sum2 = (a, b) => a+b; 
console.log("Addition is:", sum2(8, 7));

//If we want to write logic in the quatation we need to write backtrik(``)
console.log(`The addition is: ${sum2}`);
var c = 100; 
console.log(`The value of c is: ${c}`);

//Object
// if we want to create an object we need to declare { }
const student = {
	id: 1,
	name: 'Aunoy',
	department: 'CSE',
	getName: function(){
		return this.name;
	},
	getObject: function(){
		return {
			version: '1.0',
			getVersion: function(){
				return this.version;
			}
		}
	}
}
console.log(student);
// as student is an object
// if we want access any property from the obeject we need to use dot(.)
console.log(student.id);
console.log(student['id']);

console.log(student.name);
console.log(student['name']);

console.log(student.department);
console.log(student['department']);

console.log(student.getName);
console.log(student['getName']);

//if we want to access the object's property which is a function 
console.log(student.getName());
console.log(student['getName']());

console.log(student.getObject().getVersion());
console.log(student['getObject']()['getVersion']());

// how to reuse
console.log("Re-Use");
//function student1() is returned object
const student1 = () => {
	return {
		id: 1,
		name: 'Aunoy',
		dept: 'CSE'
	}
}

const s1 = student1();
const s2 = student1();
const s3 = student1();

console.log(s1);