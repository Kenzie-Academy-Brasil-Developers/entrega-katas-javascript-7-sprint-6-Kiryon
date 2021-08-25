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


const newFill = (array,valor,inicio = 0,fim = array.length-1) => {
    for(let i = inicio; i < fim;i++){
        array[i] = valor
    }
    return array
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

const newFind = (array,callback) => {
    for(let i = 0;i<array.length;i++){
        if(callback(array[i],i,array)) return i
    }
    return undefined
}

const validate2 = (valor,indice,array) =>{
    if(valor === array[indice]) return true
    return false
}

console.log([0,1,2,3,4,5,6,7,8,9].find(validate2) + " find")
console.log(newFind([0,1,2,3,4,5,6,7,8,9],validate2) + " newFind")


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

const newConcat = (array,...arguments) => {
    for(let i =0;i<arguments.length;i++){
        array.push(arguments[i])
    }
    return array
}


console.log([0,1,2,3,4,5,6,7,8,9].concat(1,20) + " concat")
console.log(newConcat([0,1,2,3,4,5,6,7,8,9],1,20) + " newConcat")

const newIncludes = (array,searchElement , fromIndex = 0) => {
    for(let i = fromIndex; i<array.length;i++){
        if(array[i] === searchElement) return true
    }
    return false
}

console.log([0,1,2,3,4,5,6,7,8,9].includes(3,1))
console.log(newIncludes([0,1,2,3,4,5,6,7,8,9],3,1))

const newIndexOf = (array,searchElement, fromIndex = 0) => {
    for(let i = fromIndex;i<array.length;i++){
        if(array[i] === searchElement) return i
    }
    return -1
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


const newReduce = (array,callback, valorInicial = 0) => {
    let result = valorInicial
    for(let i = 0;i<array.length;i++){
        result = callback(result, array[i],i,array)
    }
    return result
}

const reducer = (acumulador, valorAtual,index,array) =>{
    return acumulador += valorAtual
}

console.log([0,1,2,3,4,5,6,7,8,9].reduce(reducer,5) + " reduce")
console.log(newReduce([0,1,2,3,4,5,6,7,8,9],reducer,5) + " newReduce")

const newSlice= (array,inicio = 0,fim = array.length) => {
    let result = []
    if(inicio >= 0){
        for(let i = inicio; i < inicio + fim -1; i++){
            result.push(array[i])
        }
        return result
    }
    if(inicio < 0 && fim === 0){
        return []
    }
    if(inicio < 0 && fim < 0){
        for(let i = array.length + inicio;i<array.length + fim;i++){
            result.push(array[i])
        }
        return result
    }
    if(inicio < 0){
        for(let i = array.length + inicio;i<array.length;i++){
            result.push(array[i])
        }
        return result
    }
}

console.log([0,1,2,3,4,5,6,7,8,9].slice(-5) + " slice")
console.log(newSlice([0,1,2,3,4,5,6,7,8,9],-5) + " newSlice")

const newFlat = (array,callback) => {
    
}

const newFlatMap = (array,callback) => {
    
}