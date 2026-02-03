const numbers = [1, 2, 3, 4];


// map
const doubled = numbers.map(num => {
  return num * 2;
});

console.log(doubled)

// forEach
numbers.forEach(num => {
  console.log(num * 2);
});


// filter
const evenNumbers = numbers.filter(num => {
  return num % 2 === 0;
});


// find
const users = [
  { id: 1, name: "Amin" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" }
];

const user = users.find(u => u.id === 2);
console.log(user)



// reduce 
const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sum)






