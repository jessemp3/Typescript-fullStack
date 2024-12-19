"use strict";
// const usuario = {
//   name: "jese",//atributos / caracteristicas
//   age: 20,
//
//   show(){ //metodos / funcionalidades
//     console.log(this.name);
//     console.log(this.age);
//   }
// };
//
// const outroUsuario = {
//   name:"kaique",
//   age: "20"
// }
class Usuario {
    constructor(name, age) {
        this.name = "jesse";
        this.age = 20;
        this.showNameAndAge = () => {
            console.log(this.name);
            console.log(this.age);
        };
        this.name = name;
        this.age = age;
    }
}
const usuarioClass = new Usuario("kaique", 21);
usuarioClass.showNameAndAge();
