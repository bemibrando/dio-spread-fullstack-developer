class BankAccount {
    constructor(agency, numb, type){
        this._agency = agency;
        this._numb = numb;
        this._type = type;
        this._total = 0;
    }

    get total(){
        return this._total;
    }

    set total(value){
        this._total = value;
    }

    withdraw(value){
        if(value > this._total){
            return "Operation Denided";
        }
        this._total -= value;

        return this._total;
    }

    deposit(value){
        this._total += value;
        return this._total;
    }
}

class CurrentAccount extends BankAccount{
    constructor(agency, numb, creditCard){
        super(agency, numb);
        this._type = 'current';
        this._creditCard = creditCard;
    }

    get creditCard(){
        return this._creditCard;
    }

    set creditCard(value){
        this._creditCard = value;
    }
}

class SavingAccount extends BankAccount{
    constructor(agency, numb){
        super(agency, numb);
        this._type = 'saving';
    }
}

class CollegeAccount extends BankAccount{
    constructor(agency, numb){
        super(agency, numb);
        this._type = 'college';
    }

    withdraw(value){
        return (value > 500)?  "Operation Denided" : this._total -= value;
    }
}