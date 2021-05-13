const myFunction = (parametro, callback) => {
    if (parametro<=1){
        callback(`You win with ${parametro}`)
    } else {
        callback(`You lose with ${parametro}`)
    }
}

const printMessage = (message) => {
    console.log(message)
}

myFunction(Math.ceil(Math.random()*2), printMessage)