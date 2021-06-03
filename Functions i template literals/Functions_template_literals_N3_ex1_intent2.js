let count = () => {
    return new Promise(() => {
           var count = -1;
           var timerId = setInterval(function() {
               count++;
               console.log(count);
       
               if(count == 9) {
                   clearInterval(timerId)
                   
               }
           }, 200); } 
    );
}

let arrFunctions = []

for (i=0; i<10; i++){
    arrFunctions.push(count)
}

arrFunctions.reduce(
    (promise, asyncJob) => promise.then(() => asyncJob()),
    Promise.resolve()
).then(() => { console.log('done'); });