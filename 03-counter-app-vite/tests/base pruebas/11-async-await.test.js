import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('pruebas en asyincronismo 11', () => { 



    test('Esto deberia volver un link ', async () => { 


        

        const url = await getImagen();
        console.log(url)

        expect(typeof url).toBe("string")

     })




 })