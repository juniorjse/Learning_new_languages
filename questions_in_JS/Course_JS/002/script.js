'use strict';

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
*/

function calcTip(accountValue){
  return accountValue >= 50 && accountValue <= 300 ? accountValue*0.15 : accountValue*0.2;
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

console.log(calcAccount([275,40,430,830]));