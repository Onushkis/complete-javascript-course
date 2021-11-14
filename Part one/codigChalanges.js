//----------------------------------Coding Challenge #1
//--------------Test data 1

const MarksWeight = 78;
const MarksHeight = 1.69;

const JohansWeight = 92;
const JohansHeight = 1.95;

const MarksBMI = (MarksWeight / MarksHeight ** 2);
const JohansBMI = (JohansWeight / JohansHeight ** 2);

const MarksHigherBMI = MarksBMI > JohansBMI;

console.log(MarksBMI, JohansBMI, MarksHigherBMI);

//--------------Test data 2
let MarksWeight1 = 95;
let MarksHeight1 = 1.88;
let JohansWeight2 = 85;
let JohansHeight2 = 1.76;

const MarksBMI1 = (MarksWeight1 / MarksHeight1 ** 2);
const JohansBMI1 = (JohansWeight2 / JohansHeight2 ** 2);
const MarksHigherBMI1 = MarksBMI1 > JohansBMI1;
console.log(MarksBMI1, JohansBMI1, MarksHigherBMI1);

//----------------------------------Coding Challenge #2

if (MarksBMI > JohansBMI) {
    console.log(`Marks ${MarksBMI} is higher`)
} else {
    console.log(`Johans ${JohansBMI} is higher than Marks`)
}


//----------------------------------Coding Challenge #3

//Dolphins 1
const DolphinsScore = (96 + 108 + 109 / 3);
console.log(`Dolphins score is ${DolphinsScore}`);
//Koalas 1
const KoalasScore = (88 + 91 + 110 / 3);
console.log(`Koalas score is ${KoalasScore}`);

if (DolphinsScore > KoalasScore) {
    console.log(` Dolphins are winner 🐬 with score ${DolphinsScore}`)
} else if (KoalasScore > DolphinsScore) {
    console.log(`Koalas are winner 🐨 with score ${KoalasScore}`)
} else if (DolphinsScore === KoalasScore) {
    console.log('No one is won')
}

//Dolphins 2
const DolphinsScore2 = (97 + 112 + 101) / 3;
//Koalas 2
const KoalasScore2 = (109 + 95 + 106) / 3;

if (DolphinsScore2 > KoalasScore2 && DolphinsScore2 >= 100) {
    console.log(` Dolphins are winner 🐬 with score ${DolphinsScore2}`);
} else if (KoalasScore2 > DolphinsScore2 && KoalasScore2 >= 100) {
    console.log(`Koalas are winner 🐨 with score ${KoalasScore2}`);
} else if (DolphinsScore2 === KoalasScore2 && DolphinsScore2 >= 100 && KoalasScore2 >= 100) {
    console.log('Both are winner');
} else {
    console.log('No one wins the trophy');
}

//----------------------------------Coding Challenge #4

//------------let tips


//------------const bills
const bil1 = 275;
const bil2 = 40;
const bil3 = 430;

//  1st examåle
//less or equall than 300 or in a same time bill have to be greater or equall 50
/* const tip = bil1 <= 300 && bil1 >= 50 ? bil1 * 0.15 : bil1 * 0.2;
console.log(`The bill was ${bil1}, the tip was ${tip}, and the total value ${ bil1 + tip}`); */

//  2nd examåle

/* const tip = bil2 <= 300 && bil2 >= 50 ? bil2 * 0.15 : bil2 * 0.2;
console.log(`The bill was ${bil2}, the tip was ${tip}, and the total value ${ bil2+ tip}`); */

//  3nd examåle
const tip = bil3 <= 300 && bil3>= 50 ? bil3 * 0.15 : bil3 * 0.2;
console.log(`The bill was ${bil3}, the tip was ${tip}, and the total value ${ bil3 + tip}`);




