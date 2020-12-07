// const btn1 = document.getElementById('Btn-saludame');
// // const btn2 = document.getElementsByClassName('btn2-despideme');}
// const resultado = document.getElementById('resultado');
// const main = document.getElementById('Main');

// // console.log(resultado);

// btn1.addEventListener('click', () => {
//   // console.log('Hola felicidades me tocaste');
//   resultado.innerHTML = 'Hola felicidades me tocaste';
//   resultado.style.color = 'blue';
// });

// const Despideme = () => {
//   // console.log('Estas despedido');
//   resultado.innerHTML = 'Estas despedido';
//   resultado.style.color = 'red';
// }

// const span = document.createElement('span');
// span.innerHTML = 'Contenido nuevo';
// span.style.color = 'green';

// main.appendChild(span);

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

//funciones
// function nombre_funcion(){
//   //instrucciones
//   //return
// }

//reglas
//evitar llamar a uestras funciones con palabras reservadas
//empezar el nombre de la funiciopn con numeros

// nombre_funcion()

// const hello = () => {
//   console.log("hola mundo desde javascrit")
// }

// hello();

// const mostrarDia = () =>{
//   let fecha = new Date()
//   console.log(`hoy es dia ${fecha.getDate()}`)
// }

// mostrarDia();

// function areaCuadrado(lado){
//   let area = lado * lado;
//   console.log(`El area de nuestro cuadrado es ${area}`);
// }
// areaCuadrado();

// const areaCuadrado = (lado) => {
//   let area = lado * lado;
//   console.log(`el area de nuestro cuadrado es ${area}`);
//   return area;
// }

// let resultado2 = areaCuadrado(2);
// console.log(`el valor de resultado es: ${resultado2}`);

const form = document.getElementById('UserData');
const input = document.getElementById('UserName');
const userResult = document.getElementById('UserDataResult');
const userName = document.getElementById('UserNameResult');

const onSubmit = (event) => {
  event.preventDefault();
  userName.innerHTML = `Tu nombre es: ${input.value}`;
  userResult.classList.add('active');
  setTimeout(() => {
    userResult.classList.remove('active');
  }, 5000);
  // console.log(input.value);
}

// const onChange = (event) => {
//   console.log(event);
// }


form.addEventListener('submit', onSubmit);