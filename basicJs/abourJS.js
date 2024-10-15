// const person = new Object({
//     name: 'nn',
//     age: 23,
//     greet: function () {
//         console.log('greet')
//     }
// })

// Object.prototype.sayHello = function() {
//     console.log('hello');
    
// }

// const lena= Object.create(person)
// lena.name = 'mmm'

// const str = new String('rgerg')

//context this call bind, apply 

// function hello () {
//      console.log('hello' , this);
    
// }

// const person = {
//     name: 'Bp', 
//     age: 34,
//     sayHello : hello,
//     sayhelloWindow: hello.bind(document),
//     logInfo : function(job, phone) {
//         console.group(` ${this.name} info: `);
        
//         console.log(` Name is ${this.name}`);
//         console.log(` Job is ${job}  `)
//         console.log(` Job is ${phone}  `)

//         console.groupEnd()
        
//     }
// }


// const lena = {
//     name: 'lena',
//     age: 32
// }

// const fnLog = person.logInfo.bind(lena)
// fnLog('OIL', 785678)

// person.logInfo.call(lena)
// person.logInfo.apply(lena, ['OIL', 785678])



// const arry = [1,2,3,4,5]

// function multBy(arr, n){
//     return arr.map(function(i){
//         return i *n
//     })
// }

// Array.prototype.multBy = function(n) {
//     console.log('mult' , this);
//     return this.map(function(i){
//                 return i *n
//             })
    
// }

// console.log(arry.multBy(2));



//замыкания

// function createCulcF(n) {
//     return function (){
//         console.log(1000 * n);
        
//     }
// }

// const culc = createCulcF(99)
// culc()


// function createInc (n) {
//     return function (num) {
//         return n + num
//     }
// }

// const ff = createInc(1)
// const two = createInc(19)




// console.log(ff(5));
// console.log(ff(2));

// console.log(two(10));
// console.log(two(2222));

// function urlGen (domain){
//     return function(url){
//         return  ` https://${url}.${domain}`
//     }
// }

// const url = urlGen('com')
// console.log(url('google'));


// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}`);
    
// }


//PROMISE

console.log('req data...');

// setTimeout(() => {
//     console.log('preparing data...');


//     const back = {
//         server: 'aws',
//         port:2000,
//         stasus:'work'
//     }



//     setTimeout(() => {
//         back.modified = true
//         console.log('Data received', back);
        
//     }, 2000)
     
    
// }, 2000);

const prom = new Promise (function (res,rej) {
    setTimeout(() => {
            console.log('preparing data...');

            const back = {
                        server: 'aws',
                        port:2000,
                        stasus:'work'
                    }

                    res(back)
    }, 2000)

})


prom.then((data) => {
   const p2 = new Promise((res,rej) => {
        back.modified = true
        res(data)
   }, 2000)


   p2.then((clientData) =>{
        console.log('promise resolved',clientData);
   })
    
})