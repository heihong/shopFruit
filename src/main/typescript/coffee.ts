interface Drink {
    value: string;
    price: number;
}

export const Tea: Drink = {
    value: 'T',
    price : 0.4
}

export const Coffee: Drink =  {
    value: 'C',
    price : 0.6
}

export const Chocolate: Drink =  {
    value: 'H',
    price : 0.5
}

export class Machine {
    drink : Drink;
    sugar: (number);
    stick: number;


    constructor(drink, sugar, stick){
        this.drink = drink;
        this.sugar = sugar;
        this.stick = stick;
    }
    
    getOrder(){
        return `${this.drink.value}:${this.sugar !== 0? this.sugar:''}:${this.stick !== 0? this.stick-1:''}`;
    }

}