import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('pruebas en 08 imp exp', () => { 

    test('getgherobyid debe retornar un hero por id', () => { 

        const id = 1 ;
        const hero = getHeroeById(id)

        console.log(hero)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

     })


    test('getgherobyid debe retornar undefined si no existe el heroe', () => { 

        const id = 100;
        const hero = getHeroeById(id)

        console.log(hero)
        

        expect(hero).toBeFalsy()
     })
 } )


describe('pruebas en 08 imp exp', () => { 

    test('getgherobyowener debe devolver un filtrado', () => { 

        const owner = "DC" ;
        const heroFilter = getHeroesByOwner(owner)

        console.log(heroFilter)

        expect(heroFilter.length).toEqual(3)

     })


 } )



