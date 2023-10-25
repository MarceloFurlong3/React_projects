import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {


    test("debe retornar un saludo que diga hola fernando",()=>{
        const name = "fernando"
        const message = getSaludo(name);


        expect(message).toBe(`Hola ${name}` )

    });
 });


