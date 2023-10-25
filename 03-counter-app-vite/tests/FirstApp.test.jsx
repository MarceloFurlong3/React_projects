import { render,screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <fIRSTAPP></fIRSTAPP>', () => { 

  const title = "hola ,soy goku";
  const subTitle = "soy un substitulo"


    test(' debe hacer match con el snapshot',() => {

      const {container} = render (<FirstApp title={title}></FirstApp>)
      expect(container).toMatchSnapshot();
    })

    test('debe de moestrar el mensaje "hola,soy goku"', () => { 

       render(<FirstApp title={title}></FirstApp>)
      
       expect(screen.getByText(title)).toBeTruthy();

      })

    test('debe de moestrar el titulo en un h1' ,() => {

      render(<FirstApp title={title}></FirstApp>)

      expect(screen.getByRole('heading',{level : 1}).innerHTML).toContain(title);


    });


    test('debe de moestrar el substitulo enviado por props', () => { 



      render(
      <FirstApp 
    
        title={title}
        subTitle={subTitle}

      ></FirstApp>)

      expect(screen.getAllByText(subTitle).length).toBe(2);
        



     })



 });