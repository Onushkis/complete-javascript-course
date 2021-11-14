//----------------------------------------Const Let

/* const isIsland = false;
let language = ('Lithuanian');
console.log( isIsland);
console.log( language); */

//----------------------------------Strings and Template Literals

const firstNmae = "Ona";
const job = "Student";
const birthYear = 1988;
const years = 2037;

const ona =
  "I'm " +
  firstNmae +
  "," +
  " " +
  "a " +
  (years - birthYear) +
  " years old " +
  job +
  "!";
console.log(ona);

const onaNew = `Im ${firstNmae}, a ${years - birthYear} year old ${job}`;
console.log(onaNew);

console.log(`Just a regular String`);

//Multiple lines string

// --------------------------------old version
console.log("String with \n\
        multiple \n\
        lines");

// --------------------------------Multiple lines string Version

console.log(`String 
        multiple
        lines`);

// --------------------------------Taking Decisions if / else Statments

const age = 15;

if (age >= 18) {
  console.log("yes she can drive 🐱‍👤");
} else {
  const yearsLeft = 18 - age;
  console.log(`NO she cant drive ${yearsLeft} years 👌`);
}

const birthYearr = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// --------------------------------Type Conversion and Coercion
//type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));

//type coercion
console.log("I am " + 23 + "years old");

// --------------------------------Truthy and Falsy Values
//5 falsy values: 0, ''; undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log("Dont spend it all😀");
} else {
  console.log("You should safe ✌");
}

let height;
if (height) {
  console.log("Height is defined😀");
} else {
  console.log("WHAATTT");
}

// --------------------------------Equality Operators == vs ===

const age1 = 18;
if (age1 === 18) console.log("you just became an adult "); //strict

if (age1 == 18) console.log("you just became an adult "); //loose

/* const favorite = prompt("whats your fac numb");
console.log(favorite); */

/* if (favorite == 23) { //23 is string is converting to a number
    console.log('23 is amazing numbers ');
} */

// --------------------------------Boolean Logic

// --------------------------------Logic operator

const hasDrivingLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDrivingLicence && hasGoodVision);
console.log(hasDrivingLicence || hasGoodVision);
console.log(!hasDrivingLicence);

/* if (hasDrivingLicence && hasGoodVision) {
  console.log("Saraha is able o drive 🚗");
} else {
  console.log("Someone elese should drive....🙌");
} */
const isTired = false; // C
console.log(hasDrivingLicence && hasGoodVision && isTired);

if (hasDrivingLicence && hasGoodVision && !isTired) {
  console.log("Saraha is able o drive 🚗");
} else {
  console.log("Someone elese should drive....🙌");
}

// --------------------------------The Switch Statemant

const day = 'wenesday'; // day === 'monday*
switch (day) {
  case 'monday':
    console.log('Plan my course');
    console.log('Go to coding meetap');
    break;
  case 'tuesday':
    console.log('Run');
    console.log('Go to Carolina');
    break;
  case 'wenesday':
    console.log('Sleep');
    console.log('Go to gym');
    console.log('Write code exapmples');
    break;
  case 'thursday':
  case 'Fryday':
    console.log('Party');
    console.log('Go to Friends');
    break;
  case 'saturday':
  case 'sunday':
    console.log('sleep');
    break;
  default:
    console.log('Not a valid day');
}

if (day === 'wenesday') {
} else if (day === 'tuesday') {
  console.log('Run');
  console.log('Go to Carolina');
} else if (day === 'wenesday') {
  console.log('Sleep');
  console.log('Go to gym');
  console.log('Write code exapmples');
} else if (day === 'thursday' || day === 'Fryday') {
  console.log('Party');
  console.log('Go to Friends');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('sleep');
} else {
  console.log('Not a valod day')
}

// --------------------------------The Statemants an Expressons
// -----------------An Expresson
3 + 3 
1992 
true && false && !false

// -----------------Statement

if(23 > 10){
  console.log('23 is bigger');
}

// --------------------------------The Conditional ( Ternary) Operator

//1 example
const age3 = 23;
const drink = age3 >= 18 ? 'wine:🍷' : 'water 💧';
console.log(drink);

//2example

let drink2;
if(age3 >= 18) {
  drink2 = 'wine:🍷';
}else{
  drink2 = 'water 💧';
}
console.log(drink2);
console.log(`I like to drink ${drink2}`);




