var randomNum = Math.ceil((Math.random()* 10))
console.log(randomNum)
const promise = new Promise ((resolve, reject) => {
    if(randomNum<=5){
        resolve(`You won with: ${randomNum}`)
    } else {
        reject(new Error(`You lost`))
    }
})

promise
    .then(res =>{
        console.log(res)
    })
    .catch( err =>{
        console.log(err.message)
    })


