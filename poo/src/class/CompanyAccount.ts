import {DioAccount} from "./DioAccount";

export class companyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = ():void => {
        console.log('Emprestimo concedido');
    }
    deposit = (value:number):void => {
        console.log('A empresa depositou');
        this.balance += value;
    }

}
