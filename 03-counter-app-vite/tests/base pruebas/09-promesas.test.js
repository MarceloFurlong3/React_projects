import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('base pruebas 09', () => { 



    test('Prueba de promesas en js debe retornar un hero', (done) => { 

            const id = 1;

            getHeroeByIdAsync(id)
            .then(hero => {
                

                expect(hero.name).toBe("Batman")

                console.log(hero.name)
                done()

            });


     })

    test('Debe de obtener un error si hero no es batman', (done) => { 

            const id = 100;

            getHeroeByIdAsync(id)
            .catch(error => {
                
                expect(error).toBe("No se pudo encontrar el héroe")
                console.log(error)
                done()

            });


     })
 })