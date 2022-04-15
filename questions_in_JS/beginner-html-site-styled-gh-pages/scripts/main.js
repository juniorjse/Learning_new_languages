let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}
function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
  }
}