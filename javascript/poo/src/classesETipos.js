"use strict";
//Dio bank
//nome , accountNumber = atributos
//deposit, sacar = metodos
class Account {
    constructor(name, accountNumber) {
        this.deposit = (value) => {
            console.log(`Depositando ${value} para a conta de ${this.name}`);
        };
        this.withdraw = (value) => {
            console.log(`Sacando ${value} da conta de ${this.name}`);
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
}
class Admin {
    constructor() {
        this.getValue = () => {
            console.log(`O saldo é de ${this.balance}`);
        };
        this.balance = 20;
    }
}
