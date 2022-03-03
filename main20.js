const zoo = {
    name: 'Lion',
    gender: 'Femail',
    wight: 120,
    haight: 1.5,
    speed: 40,
    animal: {
        pet: 'cat',
        food: 'meat'
    },
    makeTest: function() {
        console.log('Test');
    }
}
zoo.makeTest();

console.log(Object.keys(zoo));  //  Vse svoystvo object 
console.log(Object.keys(zoo).length); // kolichestvo svoystv objecta

// for (let key in zoo) {
//     if(typeof(zoo[key]) === 'object') {
//         for(let i in zoo[key]) {
//             console.log(`svoystvo ${i} raven znacheniye ${zoo[key][i]}`)
//         }
//     } else {
//         console.log(`svoystvo ${key} raven znacheniye ${zoo[key]}`)
//     }
// }