var count = function(){
    for (i=0; i<=9; i++){
        console.log(i)
    }
}



let arrFunctions = []

function fillArray(){
    for (i=0; i<=9; i++){
        arrFunctions.push(count)
    }
}

fillArray()

for (x of arrFunctions){
    count()
}

//console.log(arrFunctions)
