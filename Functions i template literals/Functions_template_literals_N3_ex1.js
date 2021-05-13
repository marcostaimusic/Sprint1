var functionArray = []

function timer(){
console.log('0, 1, 2, 3, 4, 5, 6, 7, 8, 9')
}

for (i=0; i<10; i++){
    functionArray.push(timer)      
}


for (i=0; i<functionArray.length; i++){
    functionArray[i]()
}





