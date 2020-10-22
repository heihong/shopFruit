import {Birthday} from "../../main/typescript/birthday";

describe('Test person.ts', () => {
    let birthday: Birthday;
    let file = `last_Name, firt_name,date_of_birth, email\n`+
                `Doe, John, 1982/10/08, john.doe@goobar.com\n`+
                `Ann, Mary, 1975/03/11, mary.ann@foobar.com`

    beforeEach(() => birthday = new Birthday());

    test('read file', () => {
        let result =  [`Doe, John, 1982/10/08, john.doe@goobar.com`,`Ann, Mary, 1975/03/11, mary.ann@foobar.com`];
        expect(birthday.getData(file)).toEqual(result);
    })

    test('create json', () => {
        let person =  [`Doe, John, 1982/10/08, john.doe@goobar.com`];
        let result = {  
            last_name : 'Doe',
            first_name : 'John',
            date_of_birth : '1982/10/08',
            email : 'john.doe@goobar.com'
        }
        expect(birthday.getPerson(person[0])).toEqual(result);
    })

    test('create json with 2 person', () => {
        let people =   [`Doe, John, 1982/10/08, john.doe@goobar.com`,`Ann, Mary, 1975/03/11, mary.ann@foobar.com`];
        let result = [{  
                last_name : 'Doe',
                first_name : 'John',
                date_of_birth : '1982/10/08',
                email : 'john.doe@goobar.com'},
            {   last_name : 'Ann',
                first_name : 'Mary',
                date_of_birth : '1975/03/11',
                email : 'mary.ann@foobar.com'}];
        expect(birthday.getPeople(people)).toEqual(result);
    })

    test('create json', () => {
        let people =   [{  
            last_name : 'Doe',
            first_name : 'John',
            date_of_birth : '1982/10/08',
            email : 'john.doe@goobar.com'},
        {   last_name : 'Ann',
            first_name : 'Mary',
            date_of_birth : '1975/03/11',
            email : 'mary.ann@foobar.com'},
            {  
                last_name : 'ber',
                first_name : 'jean',
                date_of_birth : '1982/10/08',
                email : 'jean.ber@goobar.com'}
            ];
        let result =  [{  
            last_name : 'Doe',
            first_name : 'John',
            date_of_birth : '1982/10/08',
            email : 'john.doe@goobar.com'},
            {  
                last_name : 'ber',
                first_name : 'jean',
                date_of_birth : '1982/10/08',
                email : 'jean.ber@goobar.com'}
            ]
       let today = '1982/10/08';
        expect(birthday.getPeopleBirthday(people, today )).toEqual(result);
        
    })

    test('create json', () => {
        let peopleBirthday =  [{  
            last_name : 'Doe',
            first_name : 'John',
            date_of_birth : '1982/10/08',
            email : 'john.doe@goobar.com'},
            ]
       let result = 'Happy birthday Doe John,';
        expect(birthday.sendEmail(peopleBirthday)).toEqual(result);
        
    })

    test('create json', () => {
        let peopleBirthday =  [{  
            last_name : 'Doe',
            first_name : 'John',
            date_of_birth : '1982/10/08',
            email : 'john.doe@goobar.com'},
            {  
                last_name : 'ber',
                first_name : 'jean',
                date_of_birth : '1982/10/08',
                email : 'jean.ber@goobar.com'}
            ]
       let result = 'Happy birthday Doe John, ber jean,';
        expect(birthday.sendEmail(peopleBirthday)).toEqual(result);
        
    })





})