const newForEach = (array,callback) => {
    for(let i = 0;i<array.length;i++){
        callback(array[i],i,array)
    }
}

const show = (valor, index, arr) =>{
    console.log(valor, index, arr)
}

console.log([0,1,2,3,4,5,6,7,8,9].forEach(show)+" forEach")
console.log(newForEach([0,1,2,3,4,5,6,7,8,9],show)+" newForEach")


function newFill(array, valor, inicio, fim){
    result = []
    for(let index = 0; index < inicio; index++){
                result.push(array[index])
    }

    if(inicio === undefined){
        inicio = 0
    } 
    if(fim === undefined){
        fim = array.length
    }

    for(let index = inicio; index <= fim - 1; index++){
        result.push(valor)
    }

    if(array.length === result.length){
        fim = undefined
    }
    
    for(let index = fim ; index < array.length; index++){
        result.push(array[index])
    }

    return result
}

console.log([0,1,2,3,4,5,6,7,8,9].fill(4,2,6) + " fill")
console.log(newFill([0,1,2,3,4,5,6,7,8,9],4,2,6) + " newFill")

const newMap = (array,callback) => {
    for(let i = 0;i<array.length;i++){
        array[i] = callback(array[i],i,array)
    }
    return array
}

const modify = (valor,indice,array) =>{
    return valor + indice + array[indice]
}

console.log([0,1,2,3,4,5,6,7,8,9].map((a,b,c)=> a + b + c[b]) + " map")
console.log(newMap([0,1,2,3,4,5,6,7,8,9],modify) + " newMap")

const newSome = (array,callback) => {
    for(let i = 0;i<array.length;i++){
        if(callback(array[i],i,array)) return true
    }
    return false
}

const validate = (valor,indice,array) =>{
    if(valor === indice) return true
    return false
}

console.log([0,1,2,3,4,5,6,7,8,9].some(validate) +  " some")
console.log(newSome([0,1,2,3,4,5,6,7,8,9],validate) + " newSome")

const callbackAchar = (element, value) => {
    if (element >= value) {
      return element
    }
  }
  const newFind = (array, callbackAchar, value) => {
    for (let i = 0; i < array.length; i++) {
      if (callbackAchar(array[i], value)) {
        return array[i];
      }
    }
  }

console.log(([0,1,2,3,4,5,6,7,8,9].find(callbackAchar),3) + " find")
console.log(newFind([0,1,2,3,4,5,6,7,8,9],callbackAchar, 3) + " newFind")


const newFindIndex= (array,callback) => {
    for(let i = 0;i<array.length;i++){
        if(callback(array[i],i,array)) return i
    }
    return -1
}

const validate3 = (valor,indice,array) =>{
    if(valor === 11) return true
    return false
}

console.log([0,1,2,3,4,5,6,7,8,9].findIndex((a,b,c)=> a === 11) + " findIndex")
console.log(newFindIndex([0,1,2,3,4,5,6,7,8,9],validate3) + " newFindIndex")

const newEvery = (array,callback) => {
    for(let i = 0;i<array.length;i++){
        if(!callback(array[i],i,array)) return false
    }
    return true
}

const isBigEnough =(valor, indice,array) => {
    return valor > 3
}

console.log([0,1,2,3,4,5,6,7,8,9].every(isBigEnough) + " every")
console.log(newEvery([0,1,2,3,4,5,6,7,8,9],isBigEnough) + " newEvery")

const newFilter = (array,callback) => {
    let newArr = []
    for(let i = 0;i<array.length;i++){
        if(callback(array[i],i,array)) newArr.push(array[i])
    }
    return newArr
}

console.log([0,1,2,3,4,5,6,7,8,9].filter(isBigEnough))
console.log(newFilter([0,1,2,3,4,5,6,7,8,9],isBigEnough))

number = [0,1,2,3,1,4,2,5,6,7,8,4,9];
array = ["laranja", "pera", "computador", "mouse"];

const newConcat = (...arguments) =>{
    let arrayConcat = [];
    for(let i = 0; i<arguments.length; i++){
        arrayConcat.push(...arguments[i])
    }
    return arrayConcat
}

let returnConcat = number.concat(array,number);
let returnNewConcat = newConcat(number,array,number);

console.log(returnConcat)
console.log(returnNewConcat)

const newIncludes = (array,searchElement , fromIndex = 0) => {
    for(let i = fromIndex; i<array.length;i++){
        if(array[i] === searchElement) return true
    }
    return false
}

console.log([0,1,2,3,4,5,6,7,8,9].includes(3,1))
console.log(newIncludes([0,1,2,3,4,5,6,7,8,9],3,1))

const newIndexOf = (array, element, start)=>{
    let output = -1;

    if(start === undefined){
        for(let cont = 0; cont < array.length; cont++){
            let item = array[cont];
            if(item === element){
                output =  cont;
            }
        }
    }

    for(let cont = start; cont < array.length; cont++){
        let item = array[cont];
        if(item === element){
            output =  cont;
        }
    }

    return output;
}

console.log([0,1,2,3,4,5,6,7,8,9].indexOf(3,1) + " indexOf")
console.log(newIndexOf([0,1,2,3,4,5,6,7,8,9],3,1) + " newIndexOf")

const newJoin = (array, separador = ',') => {
    let result = ''
    for(let i =0;i<array.length;i++){
        result += array[i]
        if(i+1 < array.length) result += separador
    }
    return result
}

console.log([0,1,2,3,4,5,6,7,8,9].join() + " join")
console.log(newJoin([0,1,2,3,4,5,6,7,8,9]) + " newJoin")


const callbackReduce = (total, n) =>{
    return total + n
}
const newReduce = (arr, callback) =>{
    let total = 0;
    for(let i = 0; i<arr.length; i++){
        total = callback(total, arr[i])
    }
    return total;
}
console.log([0,1,2,3,4,5,6,7,8,9].reduce(callbackReduce) + " Reduce")
console.log(newReduce([0,1,2,3,4,5,6,7,8,9],callbackReduce) + " newReduce")

const newSlice= (array,callback) => {
}

const newFlat = (array,callback) => {
    
}

const newFlatMap = (array,callback) => {
    
}
