import {Projet} from "../../main/typescript/person";

describe('Test person.ts', () => {
    let projet: Projet;

    beforeEach(() => projet = new Projet());

    test('add all the products', () => {
        let produits = ['pommes', 'bananes', 'bananes'];
        expect(projet.som(produits)).toBe(400);
    })

    test('add only cerises', () => {
        let cerises = ['cerises', 'cerises', 'cerises'];
        expect(projet.som(cerises)).toBe(225);
    })

    
    test('add only cerises with a reduce 20', () => {
        let produits = ['cerises', 'cerises', 'cerises'];
        expect(projet.somReduction(produits, 'cerises')).toBe(205);
    })

    test('return the number of batches', () => {
        let produits = ['bananes', 'bananes', 'bananes'];
        expect(projet.nblot(produits)).toBe(1);
    })

    test('return the sum of the number of batches', () => {
        let produits = ['bananes', 'bananes', 'bananes'];
        expect(projet.som(produits)).toBe(450);
    })


    test('return the sum of the number of batches with reduce 30', () => {
        let produits = ['bananes', 'bananes', 'bananes'];
        expect(projet.somReduction(produits, 'bananes')).toBe(420);
    })

    test('return sum products with reduce with reduce cerises ', () => {
        let produits = ['pommes', 'cerises', 'cerises', 'cerises'];
        expect(projet.somWithReduction(produits, 'cerises')).toBe(305);
    })
    
    test('return sum products with reduce with reduce bananes', () => {
        let produits = ['pommes','bananes', 'bananes', 'bananes'];
        expect(projet.somWithReduction(produits, 'bananes')).toBe(520);
    })

});