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



const getEmpleado = (id)=>{
    return new Promise ((resolve,reject)=>{
        let empleado = employees.find(x => x.id === id)
        if (empleado){
            resolve(empleado)
        } else {
            reject('error')
        }           
        })
}




const getSalario = (obj)=>{
    let id = obj.id
    let salario = salaries.find(x => x.id === id).salary
    return salario
}



getEmpleado(1)
    .then(res=>console.log(res.id, res.name, getSalario(res)))
    .catch(err =>{console.log(err)})


