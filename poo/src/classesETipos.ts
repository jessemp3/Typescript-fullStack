import {peopleAccount} from "./class/PeopleAccount";
import {companyAccount} from "./class/CompanyAccount";


const people:peopleAccount = new peopleAccount(123456789,'jesse' , 123456);
people.getBalance();
people.deposit(100);
people.withdraw(50);
people.getBalance();

const company:companyAccount = new companyAccount('Dio', 123456);





//nome , accountNumber = atributos
//deposit, sacar = metodos

//classe abstrata
// abstract class Account {
//     name: string;
//     accountNumber: number;
//     balance: number = 0;
//
//
//     constructor(name: string, accountNumber: number) {
//         this.name = name;
//         this.accountNumber = accountNumber;
//     }
//
//
//     deposit = (value: number):void => {
//         console.log(`Depositando ${value} para a conta de ${this.name}`);
//     }
//
//
//     withdraw = (value: number):void => {
//         console.log(`Sacando ${value} da conta de ${this.name}`);
//     }
//
//     getBalance = () => {
//         console.log(`O saldo é de ${this.balance}`);
//     }
// }

//herança
// class Admin extends Account {
//
//         constructor(name: string, accountNumber: number) {
//         super(name , accountNumber);//passando os valores para o construtor da classe pai
//     }
//
// }




