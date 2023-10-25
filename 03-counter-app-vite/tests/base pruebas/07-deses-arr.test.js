import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('prueba de array 07', () => { 

    test('me tendria uqe devolver un array', () => { 

        

        const [letters,numbers] = retornaArreglo()


        expect(letters).toEqual("ABC")
        expect(numbers).toEqual(123)

     expect(typeof letters).toEqual("string")    
     expect(typeof numbers).toEqual("number")    

     expect(letters).toEqual(expect.any(String))
     
     })




 })