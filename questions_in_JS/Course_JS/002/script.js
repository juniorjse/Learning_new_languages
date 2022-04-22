'use strict'

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`)

function fruitProcessor(fruitA, fruitB){
  const juice = `Juice with ${fruitA} apples and ${fruitB} oranges`
  return juice;
}

const fruitJuice = fruitProcessor(7,9);
//capturar o valor em uma variavel
console.log(fruitJuice);
//Function delcaration
function calcAnge1(birthYear){
  return 2037 - birthYear;
}

const age1 = calcAnge1(2020);

//function expression
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}

const age2 = calcAge2(1992);

console.log(age1,age2);

//Arrow function
//dá a variavel e já retorna função simples
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1992);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(1992,"Juan"));
function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(fruitA, fruitB){
  const juice = `Juice with ${cutFruitPieces(fruitA)} apples and ${cutFruitPieces(fruitB)} oranges`;
  return juice;
}

console.log(fruitProcessor(3,9));
 
//44,23,71,65,54,49
//85,54,41,23,34,27

const calcAvarage = (a,b,c) => (a+b+c)/3;

const scoreDolphins = calcAvarage(85,54,41);
const scoreKoalas = calcAvarage(23,34,27);

function checkwinner(avgDolphins, avgKoalas) {
  let msg;
  if (avgDolphins > avgKoalas*2 || avgKoalas > avgDolphins*2){
    if (avgDolphins > avgKoalas){
      msg = `Dolphins are winner's ${avgDolphins} vs. ${avgKoalas}`;
    }
    else{
      msg = `Koalas are winner's ${avgKoalas} vs. ${avgDolphins}`;
    }
  }
  else{
    msg = `There are no winners in this match`;
  }
  return msg;
};

//peguei o retorno da função calcAvarage e usei aqui
console.log(checkwinner(scoreDolphins,scoreKoalas));


// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

function calcTip(bill){
  return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
}

function calcAccount(bill){
  const tips = [];
  const total = [];
  for (let i = 0; i < bill.length; i ++){
    let accountValue = bill[i];
    tips.push(calcTip(accountValue));
    let accountTip = tips[i];
    for (let j = 0; j < bill.length; j ++){
      total.push(accountValue+accountTip);
    }
    console.log(`Account Value = ${(bill[i])}; tip = ${(tips[i])}; total value = ${(total[i])}`)
  }
}

calcAccount([275,40,430,830]);


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

//no prompt vai pedir um objeto, por exemplo, job e se tiver vai retornar aquilo que estiver em job == teacher; caso não, vai retornar o else
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`)
// Object Methods
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

   getSummary: function (){
    console.log(`${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`)
   }
  // calcAge: function () {
  //   return 2037 - this.birthYeah;
}

jonas.getSummary() 
const john = 
{
  fullName: 'John Smith',
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  }
}
const mark = 
{
  fullName: 'Mark Miller',
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;

  }
}
*/

console.log(`${john.calcBMI() > mark.calcBMI() ?
   john.fullName +" BMI ("+ john.bmi + ") is higher than Mark's (" + mark.bmi +")":
    mark.fullName +" BMI ("+ mark.bmi + ") is higher than John's (" + john.bmi+")"} `)

// While loop

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

