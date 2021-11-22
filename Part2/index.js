"use strict";

// ---------------------------------Activating Strik Mode
let hasDrivingLincence = false;
const passTest = true;
if (passTest) hasDrivingLincence = true;

if (hasDrivingLincence) console.log("I can drive");

// const interface = 'Audio';


// ---------------------------------Funktions

function logger(){
    console.log('My name is Jonas');
}

// calling / running / invoking funktion
logger();
logger();
logger();

//We return here 
function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return(juice);
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

 const num = Number('23');

 // ---------------------------------Funktions Declaration vs Expressions

 //Funktion Declaration parameter in a parentence
 function callAge1(birthyear){
return  2037 - birthyear;
}
//argumnet in a parentence
const age1 = callAge1(1991);
console.log(age1);

// Function Expresions
 const calcAge2 = function (birthyear){
    return  2037 - birthyear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);