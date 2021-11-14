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