const numbers = [4,5,6,7]
console.log(...numbers)  // 4 5 6 7

// const arrayMax = Math.max(numbers)  // NaN
const arrayMax = Math.max(...numbers)
console.log(arrayMax)



const total = (a,b,c) => a + b + c
const digits = [8,9,10,11]
console.log(total(...digits))

