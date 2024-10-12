const topNumber = 223;
let str = 'John'

str =  'Smith'

// let 44err  error

let sfg2

let currentYear = 2024
const age = 1993;
let res = currentYear - age

res++
res +=1
res = res + 1


res -= 3
// console.log(res > 32);
// console.log(res == '31');


// Boolean
// string 
// Number
// Object
// undefined
// null
// Symbol
// BigInt
// nan

// 9 


// function calcAge (year){
//     const date =  new Date().getFullYear() - year
//     if(date <= 0){
//         return 'you are not born yet'
//     }
//     return date
// }

// console.log(calcAge(2023))


const cars = ['Tesla', 'Prshe', 'BMW']
// console.log(cars.length);
// console.log(cars[cars.length -1]);

// for (let i =0; i<cars.length; i++) {
//     const car =cars[i]
//     console.log(car.toUpperCase());
    
// }
// console.log();
// for(let car of cars){
//     console.log(car);
    
// }

// cars.push('Audo')
// cars.unshift('LLL')




// console.log(cars);

// cars.pop(cars)

// console.log(cars);



const person = {
    firstName :'Nurlan',
    lastName : 'Abdullaev',
    year : 1998,
    langs :['eng','russ'],
    isPrg: true,
    greet() {
        console.log('hello');
        
    }
}

const key = 'year'
console.log(person[key]);
person.greet()
