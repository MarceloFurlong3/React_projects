describe('pruebas en <DemoComponent', () => {
  test("esta prueba no debe de fallar " , () => {
    //1. inicialisacion
      const message1 = "hola mundo"
  
    //2. pruebas
      const message2 = message1.trim();
  
    //3. observaciones
  
      expect(message1).toBe(message2)
  
  })  })



