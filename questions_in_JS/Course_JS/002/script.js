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
*/
 
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


