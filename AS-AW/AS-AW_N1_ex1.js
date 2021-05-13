let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000 
}, {
    id: 3,
    salary: 2000
}];

const getEmpleado = (id) =>{

    for (i=0; i<employees.length; i++){
        if (employees[i].id===id){
                return new Promise ((resolve, reject)=>{
                    resolve(employees[i].name)
                    reject(new Error ('Not in the DB'))
                } 
            )
        } 
    }

    
}

const getSalario = (persona) =>{    
    for (i=0; i<salaries.length; i++){
        if (salaries[i].id===persona.id){
                return new Promise ((resolve, reject)=>{
                    resolve(console.log(salaries[i].salary))
                    reject(new Error ('Not in the DB'))
                } 
            )
        } 
    }
} 


getEmpleado(1)
    .then(res=>console.log(res))
    .then(getSalario(employees[0]))
    .catch( err =>{
        console.log(err.message)
    })