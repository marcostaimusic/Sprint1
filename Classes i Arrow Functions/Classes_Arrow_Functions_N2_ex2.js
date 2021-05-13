class Persona{
    constructor(name){
        this.name = name
    }

    decirNombre(){return `La persona se llama ${this.name}`}
}


const pers1 = new Persona('Marco')

console.log(pers1)
console.log(pers1.decirNombre())
