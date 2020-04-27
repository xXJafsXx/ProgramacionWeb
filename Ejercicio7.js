
//Ejercicio 1
/*
const myFunc = (callbackFunl) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

// myFunc (function(value){
//     //do something
//     console.log(value);
// });

myFunc (value => {
    //do something
    console.log(value);
}); */ 



//callbacks & foreach

//Ejercicio 2
/*
let persona = ['Jesus', 'Gloria', 'Amaya', 'Carlos', 'Maria'];

persona.forEach(function(persona){
    console.log(persona);
}); */ 

//callbacks & foreach ARROW function

let persona = ['Jesus', 'Gloria', 'Amaya', 'Carlos', 'Maria'];

const logPersona = (persona, index) =>{
    console.log (`${index} - hola ${persona}`);
}
persona.forEach(logPersona);
