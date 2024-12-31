"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class companyAccount extends DioAccount_1.DioAccount {
    constructor(name, accountNumber) {
        super(name, accountNumber);
        this.getLoan = () => {
            console.log('Emprestimo concedido');
        };
        this.deposit = (value) => {
            console.log('A empresa depositou');
            this.balance += value;
        };
    }
}
exports.companyAccount = companyAccount;
