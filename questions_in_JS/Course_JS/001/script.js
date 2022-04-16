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
}
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


0, '', null, NaN == false
se caso definir uma variavel e não atribuir um valor ela será considerada como indefinida e indefino é falso também;


diferença entre == e ===
no === é um operador de igualdade restrito deve ser do mesmo tipo e mesmo valor
18 === 18:true
'18' === 18:false

no == é um operador de igualdade que permite diferentes tipos, mas mesmos valores ex: '18' == 18: true

 
const favourite = prompt("What's your favourite number?")
//aqui ele tá reconhecendo o prompt como uma string por isso no if abaixo fica invalido

if (favourite === 23){
  console.log("ooo")
}


const dolphins = [(96+108+89),(97+112+101),(97+112+101)];
const koalas = [(88+91+110),(109+95+123),(109+95+106)];
 
for (let i=0;i<=dolphins.length-1;i++){

  scoreDolphins = dolphins[i]/dolphins.length
  scoreKoalas = koalas[i]/koalas.length

  console.log("Dolphins: " + scoreDolphins+" Koalas: " + scoreKoalas)

  if(scoreDolphins>=100||scoreKoalas>=100){

    if(scoreDolphins>scoreKoalas){
      console.log("Dolphins won roud "+(i+1))
    }
    else if(scoreDolphins<scoreKoalas){
      console.log("Koalas won roud "+(i+1))
    }
    else if(scoreDolphins==scoreKoalas){
      console.log("Break even, round "+(i+1))
    }

  }

  else{
    console.log("There were no winners in this round as none of the contestants reached 100 points");
  }
}

const day = prompt('Day: ');

switch(day){
  case 'monday':
    console.log("Plan course structure");
  case 'tuesday':
    console.log("Prepare theory videos");
  case 'wednesday':
    console.log("Write code examples");
    break;
  case 'friday':
    console.log("Record videos");
    break;
  case 'saturday':
  case 'sunday':
    console.log("Enjoy the weekend :D")
    break;
  default:
    console.log("Not a valid day!")
}

age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water") //se idade for maior ou igual a 18, gosto de vinho, caso contrario, gosto de água
const age = 29;
const drink = age >= 18 ? 'wine' : 'water';
console.log(`I like to drink ${drink}`)
console.log(`I like to drink ${age >= 38 ? 'wine' : 'water'}`)

const bill = [275,40,430]

for (let i = 0; i < bill.length; i ++){
  accountValue = bill[i];
  const tip = accountValue >= 50 && accountValue <= 300 ? accountValue*0.15 : accountValue*0.2;
  console.log(`Account Value = ${(accountValue)}; tip = ${(tip)}; total value = ${(accountValue + tip)}`)
}
*/
