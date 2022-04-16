/*let firstName = "Junior";
let lastName = "Silva";

let country = "Brasil";
let continent = "South American";
let population = 212.6;

let isIsland = false;
let language = "portuguese";

console.log("I'm live in " + country + "-" + continent + ". It's pupulation is " + population);
console.log("Island = "+isIsland+"; "+"Language = "+language);

console.log(typeof language);
console.log(typeof isIsland);

//Var é uma variavel global
//let é variapel local
//const é variavel constante e imutavél, porém, pode mudar caso seja um objeto 

const person = {name:'calos', age:17};

console.log(person.name)

person.name="julian";
console.log(person.name, typeof person)//redefini uma const object

console.log(10>5);//retorna um boolean
age=15;
yearsLeft=18-age;
console.log(`Sarah is too yong. Wait another ${yearsLeft} years:)`)

const people = [{nome: "Marks", weight:78,height:1.69},
               {nome: "John",weight:92,height:1.95}]

let contIMC = clock = 0;
for (let i=0;i<=people.length-1;i++){
  let msg;
  let imc=(people[i].weight/(people[i].height**2));
  if(imc <18.5){
    msg = "Under weight" + imc;
  }
  else if(imc<=24.9){
    msg = "Normal weight == " + imc;
  }
  else if(imc<=29.9){
    msg = "Overweight == " + imc;
  }
  else if(imc<=34.9){
    msg = "Grade 1 Obesity == " + imc;
  }
  else if(imc<=39.9){
    msg = "Grade 2 Obesity == " + imc;
  }
  else{
    msg = "Grade 3 Obesity == " + imc;
  }
  console.log((people[i].nome)+" is "+msg);

  if (imc > contIMC){
    contIMC = imc;
    clock++;
  }
  if( i == 1){
    if (clock%2==0){
      console.log("John's BMI is higher than Marks's")
    }
    else{
      console.log("Marks BMI is higher than John's")
    }
  }
}*/

//conversion
const inputYear = '1999';
console.log(Number(inputYear), typeof inputYear);

console.log(String(77), 77);

//coercion

console.log('23'-'15'+'1')

let n = '1'+1;
n --;
console.log(n);
console.log('1'+'3'-5+'9');
