export abstract class DioAccount {
    private name: string;
    private accountNumber: number;
    balance: number = 50;
   private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name:string):void => {
        this.name = name;
        console.log(`O nome foi alterado para ${this.name}`);
    }

    getName = ():string => {
        return this.name;
    }


    deposit = (value: number):void => {
        if(this.validateStatus()){
            console.log(`Depositando ${value} para a conta de ${this.name}`);
            this.balance += value;
            console.log(`O saldo é de ${this.balance}`);
        }

    }


    withdraw = (value: number):void => {
        if(this.validateStatus()) {
           if(this.balance >= value){
               console.log(`Sacando ${value} da conta de ${this.name}`);
               this.balance -= value;
               console.log(`O saldo é de ${this.balance}`);
           }
              else{
                console.log('Saldo insuficiente');
              }
        }
    }

    getBalance = ():void => {
        if (this.validateStatus()) {
            console.log(`O saldo é de ${this.balance}`);
        }
    }

   private validateStatus = ():boolean => {
        if(this.status){
            return this.status;
            console.log('Conta ativa');
        }

        throw new Error('Conta inativa');
    }

}