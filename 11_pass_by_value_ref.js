// Pass by VALUE (Primitive type)

function changeMarks(marks) {
  marks = marks + 10;
}

let studentMarks = 50;

console.log("Before call (value):", studentMarks);
changeMarks(studentMarks);
console.log("After call (value):", studentMarks);




// Pass by Reference
function changePerson(person1, person2) {
  person1.name = "Rahim";
  person2.age = 25;
}


let p1 = { name: "Aminul", age: 22 };
let p2 = { name: "Karim", age: 20 };


console.log("Before call:",p1,p2);
changePerson(p1, p2);
console.log("After call:",p1,p2);

// Before call: { name: 'Aminul', age: 22 } { name: 'Karim', age: 20 }
// After call: { name: 'Rahim', age: 22 } { name: 'Karim', age: 25 }
