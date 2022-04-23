'use strict';
 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
  //não usa o .hidden e pode remover/adicionar várias classes adicionando uma virgula
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden')
}

//Função simplificada para remover o pop-up
const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//esse for serve para cada vez que eu chamar uma função
for (let i = 0; i < btnsOpenModal.length; i++)

//chama função para abrir o pop-up ao clicar no botão
btnsOpenModal[i].addEventListener('click', openModal);
//chama função para remover o pop-up ao clicar no botão
btnCloseModal.addEventListener('click', closeModal);
//chama função para remover o pop-up ao clicar fora da caixa
overlay.addEventListener('click', closeModal);


//Global events.
//fechar o pop-up pela tecla esc
document.addEventListener('keydown', function(e){
  //mostrar qual tecla está sendo pressionada
  console.log('A key was pressed');
  console.log(e.key);
  //se em modal  nãoo haver a classe hiden(aparecer) retorna um bollean que é verdade e aí sim pode colocar para adicionala 
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
  }
})