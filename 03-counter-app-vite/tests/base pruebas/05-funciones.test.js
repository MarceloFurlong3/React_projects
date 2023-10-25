import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 


    test('getUser debe de retornar un objeto', () => {
            const testUser = {
                uid:'ABC123',
                username:"El_Papi1502"
            }

            const user = getUser()
            console.log(user)



            expect(testUser).toEqual(user)
    });


    test('GetUsuarioActivo debe retornar un objeto' , () => {

        


        const name ="Marcelo"
        const user2 = getUsuarioActivo(name)

        expect(user2.username).toEqual(name)

        console.log(user2.username)
    });
   


 });