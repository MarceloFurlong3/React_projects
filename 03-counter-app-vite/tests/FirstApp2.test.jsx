import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";





describe('Pruebas en <fIRSTAPP></fIRSTAPP>', () => { 

    // test('debe de hacer match con el snapshot', () => { 

    //     const title = 'hola , soy goku';
    //     const {container} = render(<FirstApp title={title}></FirstApp>)
        

    //     expect(container).toMatchSnapshot();
    //  });

    //  test('debe de mostrar el titulo en un h1', () => { 


    //     const title ="hola" ;
    //     const {container,getByText,getByTestId} = render(<FirstApp title={ title }></FirstApp>)

        
        
    //     //expect( getByText(title) ).toBeTruthy()

    //     // const h1 = container.querySelector('h1')
    //     // expect(h1.innerHTML).toContain( title ) 

    //     expect( getByTestId('test-title').innerHTML ).toBe(title)

        
        

    //   });

      test('debe de mostrar el substitulo enviado por props', () => { 



        const title ="hola" ;
        const subtitle= "soy un substitulo"
        const {getAllByText} = render(
        <FirstApp 
        
        title={ title }
        subTitle={subtitle}
        
        >

        </FirstApp>)

        
        
        //expect( getByText(title) ).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain( title ) 

        expect(getAllByText(subtitle).length).toBe(2)





       })   



 });