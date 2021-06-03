class Persona{
    constructor(name){
        this.name = name
    }

    decirNombre(){console.log(this.name)}
}


const pers1 = new Persona('Marco')


pers1.decirNombre()
