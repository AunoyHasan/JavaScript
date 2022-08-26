const person = {
    first_name: 'john',
    last_name: 'Cena',
    getName: function(){
        return this.first_name;
    }
}

var txt = "";

for(i in person){
    txt += person[i]+"\n";
}

console.log(txt);
document.getElementById("demo").innerHTML = txt;

//using array
const myArray = Object.values(person);
document.getElementById("demo2").innerHTML = myArray;
console.log(myArray);

//uaing JSON
let myString = JSON.stringify(person);
document.getElementById("demo3").innerHTML = myString;
console.log(myString);

const person2 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    get lang() {
        return this.language.toUpperCase();
      }
  };
  
  // Display data from the object using a getter:
//   var txt2 = "";

// for(i in person2){
//     txt2 += person2[i]+"\n";
// }
// document.getElementById("demo4").innerHTML = txt2;
// console.log(txt2);


document.getElementById("demo5").innerHTML = person.lang;