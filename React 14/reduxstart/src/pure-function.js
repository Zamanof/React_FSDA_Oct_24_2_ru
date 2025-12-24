
// 1. Возвращаемое значение зависит
// только от аргументов

// 2. У функции не должно быть
// побочных эффектов

const pow = (numb)=>{
    return numb ** 2
}

console.log(pow(5))

const rand = (number)=>{
    return Math.random() * number
}

let a = 5
const foo = ()=>{
    a = 65;
    return foo
}

const bar = (text)=>{
    document
        .getElementById('root')
        .innerHTML = "Hello World"
}

let arr = [2,5,8,9]
let arr2 = arr.map((item)=>item*2)
console.log(arr2)