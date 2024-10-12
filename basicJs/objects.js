const person = {
    firstName :'Nurlan',
    lastName : 'Abdullaev',
    year : 1998,
    langs :['eng','russ'],
    isPrg: true,
    "complex key":"sq",
    ['key_ ' + (1 + 2)] : 23,
    greet() {
        console.log('hello');
        
    }
}

// const key = 'year'
// console.log(person[key]);
// person.greet()

 Object.keys(person).forEach((key) => console.log(person[key]))
