//objeto e interface

interface Pessoa {
  nome: string;
  age: number;
  profissao?: string; // uma interrogação depois do nome da propriedade é para dizer que a propriedade não é obrigatoria !
}

const pessoa: Pessoa = {
  nome: "jesse",
  age: 20,
};

const outraPessoa: Pessoa = {
  nome: "kaique",
  age: 20,
  profissao: "Desenvolvedor PHP",
};

//Array<Pessoa>
const arrayPesoa: Pessoa[] = [pessoa, outraPessoa];
const number: number[] = [1, 2, 3, 4, 5];
const outroNumber: Array<number> = [1, 2, 3, 4, 5];
