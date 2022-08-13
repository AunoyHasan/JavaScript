var student1 = {
    id: 111,
    name: 'dil',
    marks: 91,
    phone: 099887766
};

console.log(student1);
console.log(student1.name);
console.log(student1.phone);

student1.phone = 1111;

console.log(student1.phone);


student1["phone"] = 2222;
console.log(student1.phone);