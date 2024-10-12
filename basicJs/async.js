// const timeout =  setTimeout(() => {
//     console.log('after 1 sec ');
    
// },1000)
// clearTimeout(timeout)

// let i =0;
// const inter = setInterval(() => {
    
//         console.log(' interval after 1 sec ',i);
// i++
    
// },1000)


// setTimeout(() => {
// clearInterval(inter)
// },5000)
// -----

// const delay = (fn, wait = 1000) => {
//     setTimeout(fn, wait)
// }
// delay(() => {
//     console.log('after 1 sec');
    
// })



// const delay = (wait = 1000) => {
//    const promise =  new Promise((res, rej) => {
         
//         setTimeout(() => {
//             res()
//         }, wait)
//     } )

//     return promise
// }


// delay(2500).then(() => {
//     console.log('after 2500 ms');
    
// })
