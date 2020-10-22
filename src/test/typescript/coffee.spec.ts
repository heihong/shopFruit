import { Machine, Tea, Coffee, Chocolate} from "../../main/typescript/coffee";

describe('Test person.ts', () => {
    let machine: Machine;

    test('read file', () => {
        machine = new Machine(Tea, 1, 1);
        expect(machine.getOrder()).toEqual('T:1:0');
    })

    test('read file', () => {
        machine = new Machine(Chocolate, 0, 0);
        expect(machine.getOrder()).toEqual('H::');
    })

    test('read file', () => {
        machine = new Machine(Coffee, 2, 1);
        expect(machine.getOrder()).toEqual('C:2:0');
    })
})