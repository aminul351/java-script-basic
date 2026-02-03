class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

 eat(){
        console.log(`${this.name} is eating`)
    }

}


class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age)
        this.color = color
    }
   

    meow(){
        console.log(`${this.name} is meowing`)
    }

}



class Dog extends Animal{
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed
    }
   

    bark(){
        console.log(`${this.name} is barking`)
    }

}



class Bird extends Animal{
    constructor(name, age, species) {
        super(name, age)
        this.species = species
    }
   

    sing(){
        console.log(`${this.name} is singing`)
    }

}



const cat = new Cat('Tommy', 3, 'red')
cat.meow()
console.log(cat)

const dog = new Dog('Puppy', 34, 'hybrid')
dog.bark()
console.log(dog)