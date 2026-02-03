const person = {
  name: "Aminul",
  age: 22,
  gender: "Male",
  profession: "Student"
};

const keys = Object.keys(person)  // [ 'name', 'age', 'gender', 'profession' ]
const values = Object.values(person)  //  [ 'Aminul', 22, 'Male', 'Student' ]
const entries = Object.entries(person)

console.log(keys, values, entries);



Object.freeze(person)

person.institution = 'CU'
person.age = person.age + 2
delete person.gender
console.log(person)