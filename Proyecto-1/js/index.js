const btn1 = document.getElementById('Btn-saludame');
// const btn2 = document.getElementsByClassName('btn2-despideme');}
const resultado = document.getElementById('resultado');
const main = document.getElementById('Main');

// console.log(resultado);

btn1.addEventListener('click', () => {
  // console.log('Hola felicidades me tocaste');
  resultado.innerHTML = 'Hola felicidades me tocaste';
  resultado.style.color = 'blue';
});

const Despideme = () => {
  // console.log('Estas despedido');
  resultado.innerHTML = 'Estas despedido';
  resultado.style.color = 'red';
}

const span = document.createElement('span');
span.innerHTML = 'Contenido nuevo';
span.style.color = 'green';

main.appendChild(span);

// function nombre(n) {
//   // cmabiar nombre a lower case
//   n.toLowerCase();
// }
// console.log(nombre);
// var nombre = 0;
// console.log(nombre);
// var funcion = 0;
// var nombre = 'pepe';
// console.log(nombre);
// nombre('PEPITO');