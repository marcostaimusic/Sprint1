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


const getEmpleado =()=>{
    return new Promise ((resolve, reject)=>{
        if(employees.length===0){
            reject(new Error('Not in the DB'))
        }        
        setTimeout(()=>{
            resolve(employees)
        }, 2000)

    })
}

async function getData(){
    try{
        const data = await getEmpleado()
        console.log(data)
    }
    catch (err){
        console.log(err)
    }
}

getData()