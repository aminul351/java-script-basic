const numbers = [1, 2, 3, 4, 5];
for (const num of numbers){
    console.log(num)
}



const person = {
  name: "Aminul",
  age: 22,
  gender: "Male",
  profession: "Student"
};

for(const key in person){
    const value = person[key]
    console.log(key, value)
}