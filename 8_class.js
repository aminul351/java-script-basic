class Player {

    constructor(name, age) {
        this.name = name
        this.age = age
        this.location = 'BD'
    }

    goal() {
        console.log('this player score a goal')
    }

}

const player1 = new Player('Rodri', 33)
const player2 = new Player('Halland', 35)
player1.goal()
console.log(player1,player2)


