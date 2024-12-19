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
  name:string = "jesse";
  age:number =  20;

  constructor(name:string , age:number){
    this.name = name;
    this.age = age;
  }


  showNameAndAge = () => {
    console.log(this.name);
    console.log(this.age);
  }
}

const usuarioClass = new Usuario("kaique" , 21);

usuarioClass.showNameAndAge()