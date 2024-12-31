"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
class DioAccount {
    constructor(name, accountNumber) {
        this.balance = 50;
        this.status = true;
        this.setName = (name) => {
            this.name = name;
            console.log(`O nome foi alterado para ${this.name}`);
        };
        this.getName = () => {
            return this.name;
        };
        this.deposit = (value) => {
            if (this.validateStatus()) {
                console.log(`Depositando ${value} para a conta de ${this.name}`);
                this.balance += value;
                console.log(`O saldo é de ${this.balance}`);
            }
        };
        this.withdraw = (value) => {
            if (this.validateStatus()) {
                if (this.balance >= value) {
                    console.log(`Sacando ${value} da conta de ${this.name}`);
                    this.balance -= value;
                    console.log(`O saldo é de ${this.balance}`);
                }
                else {
                    console.log('Saldo insuficiente');
                }
            }
        };
        this.getBalance = () => {
            if (this.validateStatus()) {
                console.log(`O saldo é de ${this.balance}`);
            }
        };
        this.validateStatus = () => {
            if (this.status) {
                return this.status;
                console.log('Conta ativa');
            }
            throw new Error('Conta inativa');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
}
exports.DioAccount = DioAccount;
