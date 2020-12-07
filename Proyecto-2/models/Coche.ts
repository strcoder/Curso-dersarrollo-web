class Coche {
  private nombre: string;
  marca;
  precio;
  modelo;
  protected color;

  constructor(nombre: string, marca: string, precio: string | number, modelo: any, color: any) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.modelo = modelo;
    this.color = color;
  }

  public getNombre() {
    return this.nombre;
  }

  public setNombre(nombre) {
    this.nombre = nombre;
  }

  apartar(usuario, cantidad) {
    console.log(usuario.nombre);
    console.log('Aparto: ' + cantidad);
    console.log('Del siguiente auto: ' + this.nombre, this.marca, this.color);
    console.log('Con el precio de:' + this.precio + ' cada uno');
  }
}



// const fuma = new Coche('Fuma', 'Fuma', 200000, 'A-59', 'Gris');

// fuma.apartar({ nombre: 'pepito', apallido: 'perez' }, 5);

// const adiol = new Coche('Adiol', 'Adiol', 500000, 'F-80', 'Negro');

// adiol.apartar({ nombre: 'pepito', apallido: 'perez' }, 2);

// const apartar = (usuario, cantidad) => {
//   console.log(usuario.nombre);
//   console.log('Aparto: ' + cantidad);
//   console.log('Del siguiente auto: ' + this.nombre, this.marca, this.color);
//   console.log('Con el precio de:' + this.precio + ' cada uno');
// }

// const usuario = {
//   name: '',
//   contacto: {
//     telefono: 12345,
//     redesSociales: {
//       facebook: ''
//     }
//   }
// }

// const adiol = {
//   nombre: '',
//   marca: '',
//   precio: '',
//   modelo: '',
//   color: '',
//   aparatar: apartar,
//   usuario: usuario,
// }

// const fuma = {
//   nombre: '',
//   marca: '',
//   precio: '',
//   modelo: '',
//   color: '',
//   usuario: usuario,
// }

// fuma.nombre;
// fuma.nombre = 'fuma2';

// adiol.usuario.contacto.redesSociales.facebook;
// adiol.usuario.contacto.telefono;
// adiol.aparatar({ nombre: 'pepito', apallido: 'perez' }, 2);


// const s = 'hola';

// s.toUpperCase();

// const list = [1, 2, 3, 4, 5];
// // const list = [2, 3, 4, 5, 6];

// const variable = list.map((n) => n = 'este es el numero' + i);

// const encontrado = list.find((n) => n * 2 === 18);


// // encontrado = 5

// for(i = 0; i < list.length; i++) {
//   list[i] = 'este es el numero' + i;
// }
// // 'HOLA';

// const suma = 5 + 5;

// const resultado = list[2] * suma;
