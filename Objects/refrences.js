const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };
  
  // Change a property
 Object.defineProperty(person, "language", {value : "NO"});
  console.log(person)