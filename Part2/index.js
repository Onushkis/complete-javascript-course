/* "use strict";

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

 

// ---------------------------------Arrow Funktions 

const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);
const YearsUntilRetirement = (birthyear, firstName) => {  
const age = 2037 - (birthyear);
    const retirement =  65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} year`;
}

console.log(YearsUntilRetirement(1991, 'Ona'));
console.log(YearsUntilRetirement(1980, 'BOna'));


// ----------------------------Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges){
const applesPieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applesPieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return(juice);
}
// fruitProcessor (2, 3);

console.log(fruitProcessor(2, 3));

*/
//--------------------Reviewing Functions

const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const YearsUntilRetirement = function(birthYear, firstName)  {
     const age = calcAge(birthYear);
    const retirement = 65 - age; 

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has allready retired 🤘`);
        return -1;
    }
}
console.log(YearsUntilRetirement(1991, 'Ona'));
console.log(YearsUntilRetirement(1950, 'BOna'));