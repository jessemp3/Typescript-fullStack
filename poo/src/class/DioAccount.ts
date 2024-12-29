export abstract class DioAccount {
    name: string;
    accountNumber: number;
    balance: number = 0;


    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }


    deposit = (value: number):void => {
        console.log(`Depositando ${value} para a conta de ${this.name}`);
    }


    withdraw = (value: number):void => {
        console.log(`Sacando ${value} da conta de ${this.name}`);
    }

    getBalance = ():void => {
        console.log(`O saldo é de ${this.balance}`);
    }
}