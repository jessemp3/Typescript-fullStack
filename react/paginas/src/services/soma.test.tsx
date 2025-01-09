import {soma , multiplica} from './soma.tsx';


describe('soma', () => {
    it('deve somar os dois números', () => {
        const result:number = soma(1,2);
        expect(result).toBe(3);
    })

    it('deve multiplicar os dois números', () => {
        const result:number = multiplica(2,2);
        expect(result).toBe(4);
    })

    it('deve multiplicar os dois números', () => {
        const result:number = multiplica(3,1);
        expect(result).toBe(6);
    })

    it("deve informar um erro de o multiplicador for diferente de 2 ou 3" , () => {
        expect(() => multiplica(3,4)).toThrowError("Multiplicador inválido");
    })

})

