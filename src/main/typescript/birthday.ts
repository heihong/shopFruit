export interface Person {
    last_name : string,
    first_name: string;
    date_of_birth : string,
    email: string;
}


export class  Birthday {

    getData(file){ 
       let result =  file.split('\n');
       result.splice(0,1);
        return result;
    };

    getPerson(text){
        let data = text.split(', ');
        return {  
            last_name : data[0],
            first_name : data[1],
            date_of_birth : data[2],
            email : data[3]
        }
    }

    getPeople(people) {
        let tabPeople = [];
        people.forEach(element => {
            console.log(element)
            console.log(this.getPerson(element))
            tabPeople.push(this.getPerson(element));    
        });
        return tabPeople;

    }

    getPeopleBirthday(people, today){
        return people.filter((el) => el.date_of_birth === today);
    }

    sendEmail(peopleBirsthdays){
        let result = 'Happy birthday';
        peopleBirsthdays.forEach(element => {
            result +=  ` ${element.last_name} ${element.first_name},`;
        });
        return result;
       
    }

   
    
}