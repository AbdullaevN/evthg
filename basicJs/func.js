// // function greet(name) {
// //     console.log('hello', name)
// // }

// // // console.log(greet('r'));
// // greet('nnn')

// // const greet2 = function (name) {
// //     console.log('2 heelo from' , name);
    
// // }

// // greet2('mmm')



// // const arror = (name) => {
// //     console.log('heelo,', name);
    
// // }
// // arror('name')

// // const arr2 = name =>  name **2
// // console.log(arr2(3))


// // function sumAll (...all){

// //     // let res = 0
// //     // for(let n of all) {
// //     //     res+=n
// //     // }
// //     // return res

// //     return all.reduce((acc,n) => {
// //         return (acc += n)
// //     }, 0)
// // }

// // console.log(sumAll(1,3,4,5))
// // console.log(sumAll(1,3,4,5,7,9,23))


// function createMember(firstName) {
//     return function(lastName)   {
//         console.log(firstName + ' ' + lastName);
        
//     }
// }

// const logW = createMember('John')

// // console.log(logW());

// logW('Doe ')