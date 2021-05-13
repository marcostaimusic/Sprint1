function ex1(){
    var arrName = ['M', 'A', 'R', 'C', 'O']

        for(i=0; i<arrName.length; i++){
            console.log(arrName[i])
        }
}

function ex2(){
    var arrName = ['M', 'A', 'R', 'C', '123', 'O']
         
    for(i=0; i<arrName.length; i++){

        if (/\d/.test(arrName[i]) === true ){
            console.log('Els noms de persones no contenen el número: ' + arrName[i])
        } else if (/[a,e,i,o,u]/gi.test(arrName[i]) === true){
        console.log('He trobat la vocal: ' + arrName[i])
        } else {
            console.log('He trobat la consonant: ' + arrName[i])    
        }
    }
}


function ex3(){
    var arrName = ['A', 'L', 'E', 'J', 'A', 'N', 'D', 'R', 'O']

    function createMap (arr){
        let map = new Map
        for(i=0; i<arr.length; i++){
            map.set(arr[i], 0)
            } 
        
            for (i=0; i<arr.length; i++){
            let count = map.get(arr[i])
            map.set(arr[i], count+1)
        } return map
    }

    console.log(createMap(arrName))
}

function ex4(){
    var arrName = ['M', 'A', 'R', 'C', 'O']
    var arrSurname = ['Z', 'A', 'P', 'P', 'A', 'N', 'I']

    var concat =(arr1, arr2)=>{
        let result = arr1.concat(' ', arr2)
        return result
        
    }

    console.log(concat(arrName, arrSurname))
    
}

function N2(){
    let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos.Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

        
        function getEmail(text){
            var newArray = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.*[a-zA-Z0-9._-ñ]+)/gi);
            var resArray =[]
            for (i=0; i<newArray.length; i++){
                resArray.push(newArray[i].toLowerCase())
            }
            return resArray
        }

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        var unique = getEmail(str).filter(onlyUnique);

        console.log(unique);
}