//Pass an Array to the new Set() constructor:
const letters = new Set(["a","b","c"]);
console.log(letters);
letters.add("d");
letters.add("e");
console.log(letters);

//The forEach() method invokes a function for each Set element
let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(text);


console.log(letters.values());   // Returns [object Set Iterator]
// Create an Iterator
const myIterator = letters.values();

// List all Values
let text2 = "";
for (const entry of myIterator) {
  text2 += entry;
}
console.log(text2);

