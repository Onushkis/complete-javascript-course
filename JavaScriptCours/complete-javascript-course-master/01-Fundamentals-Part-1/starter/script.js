/* let js = 'amazing';
console.log(40 + 8 + 23 - 8);

console.log('Jonas');
console.log(23);

let firstName ='Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conveton


let myFirstJob = 'Programer';
let myCurrentJob = 'Teacher';
console.log(myCurrentJob);



let javaScriptIsFun  = true;
console.log(javaScriptIsFun);


console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//we change the value from javaScriptIsFun to Yes! by writing:
javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year)
console.log(typeof year);

console.log(typeof null);




let age = 30;
age = 31;
console.log(age);


const birthYear = 1991;
console.log (birthYear);
*/

//Opertators
/*
const ageJones = 2037 - 1991;
const ageSarah = 2037 - 2018;

console.log(ageJones, ageSarah);
*/

/* ----------------------------------------------------------------------------
//Math Operators
// Better way with 2 same nummbers
const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;

console.log(ageJones, ageSarah);
console.log(ageJones *2, ageJones / 10, 2 **3);

const firstName = 'Ona';
const lastName = ' Girdzijauskaite';
console.log(firstName + ' ' + lastName);

// Assigmnet operators 

let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x +1
x--;
x--;

console.log(x);

// Comparison operators

console.log(ageJones > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); 

*/

/*------------------------------------------------------------------------------
//AverageAge
const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
const AverageAge = ( ageSarah + ageJones) / 2;
console.log( ageJones, ageSarah, AverageAge);

console.log(now - 1991 > now - 2018);


*/

// -----------------------------------------------------------Chalange #1

// ------------------------TEST DATA 1

/* //  1 assigmnent
const massMark = 78;
const heightMark = 1.69;
const massJohan = 92;
const heightJohn = 1.95;

// 2 second assigment
const BMIMark = massMark / heightMark ** 2;
const BMIJohan = massJohan / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohan; // 3 assigment
// 3 assigment
console.log(BMIMark, BMIJohan, markHigherBMI); */


/*
// --------------------------------TEST DATA 2

const massMark = 95;
const heightMark = 1.88;
const massJohan = 85;
const heightJohn = 1.76;

// 2 second assigment
const BMIMark = massMark / heightMark ** 2;
const BMIJohan = massJohan / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohan; // 3 assigment
// 3 assigment
console.log(BMIMark, BMIJohan, markHigherBMI);
*/


/*
//-----------Strings and Template Literals

 const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = 'Im' + ' ' + firstName + ' , a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)


// Better way to do it with Template Literals

const jonasNew = `I'm ${firstName}, a ${year - birthYear
} year old ${job} !`;
console.log(jonasNew) ; 
console.log(`Just a regular string`)

// Multiple  lines old versions

console.log( 'String with \n\
multipple \n\
lins');

// Multiple  lines NEW versions
console.log(`String
multiple
lines`);

*/

//_____________________________IF / Else Control Stucture

/* const age = 15;

if(age >= 18) {
console.log('Sara can start driving license 🚗')
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years✌ `);
} */

//-------------------------------------Example if / else
/* onst birthYear = 1998;

let century;
if(birthYear <= 2000){
     century = 20; 
}else
 century = 21;

console.log(century); */


// -----------------------------------------Type Conversions and Coercion

// -------------------------Type Conersion : when we manuely convert from one type to onwer
/* 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);


console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);


// -------------------------Type Coercion : when JavaScript automatecli convert type for us

console.log('I am ' + 23 + ' ' + 'years old');
console.log('23' - '10' - '3'); // 23-10-3 =10
console.log('23' + '10' + '3'); //23103
console.log('23' * '2'); //46
console.log('23' > '18'); //true

let n = '1' + 1; // 1+1=11 because og the plius operator a number conver to a String
n = n - 1; // 11 - 1 = 10  when is minus operator so it automatacly convert to a Number
console.log(n); // 10

console.log(2+3+4+'5')  // 95 
console.log('10' - '4' - '3' -2+'5'); // 15
 */








/*

// -----------------------------------------Truthy and Falsy

// 5 falsy values: 0, '' , underfined, null, NaN;

 console.log(Boolean(0));

console.log(Boolean(undefined));

console.log(Boolean('Jonas'));  //if was an emty was Falsy

console.log(Boolean({}));
 console.log(Boolean('')); // because is emty is false
 

// the answer is : console.log("Don't spend it all;"); Because is a number, and if it was 0 was ('You should get a job')


 const money = 10;
 if(money) {
     console.log("Don't spend it all;");
 }else{
     console.log('You should get a job')
 }


 // the answer is : ('Height is UNDERFINED')

 let height ;  // is underfined
 if(height){
     console.log('Yah! Height is defined');
 }else{
     console.log('Height is UNDERFINED')
 }
 */


 //-------------------------------Equality Operators == vs ===
// === when both values is exatly the same

/* 
 const age = '18';
 if(age=== 18) console.log('You just became an adult(strict)')

 if(age== 18) console.log('You just became an adult(loose)')

const favourite = Number( prompt  ("What is your favorite number?"))
console.log(  favourite);
console.log( typeof favourite);

if(favourite === 23) { // 23 ===23
    console.log('Coll! 23 is an amazing number')
}else if(favourite ===7){


    console.log("7 is also a cool number");


}else if(favourite ===9){
    
    console.log("9 is also a cool number");
}

else{
    console.log('Number is not 23 or 7') // number is not 7 or 23

}

if (favourite !==23) //if a number is not 23
console.log('Why not 23?'); */


// ------------------------------------------------------BOOLEAN LOGIC

/* const hasDriverLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicence && hasGoodVision);

 console.log(hasDriverLicence || hasGoodVision);

 console.log(!hasDriverLicence );

 const shouldDrive = hasDriverLicence && hasGoodVision;

/*  if ( hasGoodVision && hasDriverLicence) {
     console.log('Sarah is able to drive')
 }else{
     console.log('someone else should drive...')
 } */
 
 /*
 const isTired = true; // C
console.log(hasDriverLicence || hasGoodVision || isTired);

if ( hasGoodVision && hasDriverLicence && !isTired) { // true and true and fals is false
    console.log('Sarah is able to drive')
}else{
    console.log('someone else should drive...')
}
 */


//----------------------------------------Coding Challenge #3

/* // ---------------------- # 1 Calculatite the highest averge

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKOlas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKOlas);

// -------------------------- # 2 Compare the average

if (scoreDolphins > scoreKOlas) {
    console.log('Dolphins win the trophy 🐬');
}else if(scoreKOlas > scoreDolphins){
    console.log('Koalas win the trophy 🐨');
} else if(scoreDolphins === scoreKOlas){
    console.log('Both win the trophy! 🏆');
}
 */

// -------------------------- # 3 Bonus 1 & # 3 Bonus 2

//  Include a requirement for a minimum score of 100
/* 
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKOlas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKOlas);


if (scoreDolphins > scoreKOlas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🐬');
}else if(scoreKOlas > scoreDolphins && scoreKOlas >= 100){
    console.log('Koalas win the trophy 🐨');
} else if(scoreDolphins === scoreKOlas && 
    scoreDolphins >= 100 && scoreKOlas  >= 100){
    console.log('Both win the trophy! 🏆');
}else{
    console.log('No one wins the trophy 😿');
};
 */


// ------------------------------------------------Switch Statemen

/* 
const day = 'fryday';
switch(day){
    case 'monday': //day ==='monday'
    console.log('Plan course structure');
    console.log('Go to coding meetap');
     break;
    case 'tuesday':
        console.log('Write code examples')
    break;
    case 'wednesday':
    case 'thursday':
        console.log('Record videos');
        break;
     case 'fryday':
         console.log('Prepare theory videos');
    break;
         case 'saturday':
         case 'sunday':
        console.log('Enjoy the weekend');
        break;
        default:
        console.log('Not a valid day!');
} 



if(day === 'monday'){

    console.log('Plan course structure');
    console.log('Go to coding meetap');

}else if(day === 'tuesday') {

    console.log('Write code examples');

}else if ( day === 'wednesday' || day === 'thursday'){

    console.log('Record videos');


}else if (day === 'fryday'){
console.log('Prepare theory videos');

}else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend');
}else{
    console.log('Not a valid day!');
}
 */


// -----------------------------LECTURE: The switch Statement

// ---1st version

/* // const language = 'chinese' || 'mandarin';
const language = 'arabic';

if (language === 'chinese' || language === 'mandarin'){
    console.log('MOST number of tnative speaker');
}else if( language === 'spanish'){
    console.log("2nd place in number of native speakers'")
}else if (language === 'english'){
    console.log('english: 3rd place');
}else if (language === 'hindi'){
    console.log(' 4 place');
}else if (language === 'arabic'){
    console.log('arabic: 5th place');
}else{
    console.log('great language too');
}
 */

/* // ---1st version

// const language = 'chinese' || 'mandarin';
const language = 'spanish';
switch (language){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of tnative speaker');
        break;
    case 'spanish':
            console.log("2nd place in number of native speakers");
        break;
    case 'english':
                console.log('english: 3rd place');
        break;
    case 'hindi':
    console.log(' 4 place');
        break;
    case 'arabic':

       console.log('arabic: 5th place');
       break;
    default:
        console.log('great language too');
};
 */




/* // Statements and Expression


//Expressions:
3 + 4 // is an Expression
1991
true && false && !false

//Statement:

if (23>10){ // if statment
    const str = '23 is bigger than 10' // the string is an expresion and hold line is an statmeny
}

const me = 'Ona'
console.log(`i'm ${2037-1991} years old ${me}`) */


//-------------The Conditional (Ternary) Operator:  / similler than if else statment just all in one line


/*  const age = 23; // conditionl operator / Ternary Operator because it has 3 parts  condtion, if par and else part
/*
age >=18 ? console.log('I like to drink beer 🥃') : console.log('I like to drink milk 🥛 '); */

/* const drink = age >= 18 ? 'beer 🥃' : 'milk 🥛 ';
console.log(drink); */


l/* et drink2;

if (age >=18){
    drink2 = 'beer 🥃';
}else{
   drink2 = 'milk 🥛 ';
}
console.log(drink2);

console.log (`I like to drink ${age >= 18 ? 'beer 🥃' : 'milk 🥛 '}`);  */

