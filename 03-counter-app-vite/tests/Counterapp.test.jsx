import { fireEvent, render,screen } from "@testing-library/react";
import { Counterapp } from "../src/Counterapp";

describe('Pruebas en Counterapp', () => {

    const InitialValue = 10

test('Debe hacer screenshot con Counterapp', () => {

    const {container} = render (<Counterapp> </Counterapp>)

    expect(container).toMatchSnapshot();
    
});


test('Debe de mostrar el valor inicial de 100', () => {

     render (<Counterapp value={100}> </Counterapp>)

    
    expect(screen.getByText('100')).toBeTruthy();

    expect(screen.getByRole('heading',{level : 2}).innerHTML).toContain('100')
    
});


test('debe de incrementar con el boton +1', () => {
    
    render(<Counterapp value ={ InitialValue }></Counterapp>);

    fireEvent.click(screen.getByText('+1'));

    expect(screen.getByText('11')).toBeTruthy();

});

test('debe de incrementar con el boton -1', () => {
    
    render(<Counterapp value ={ InitialValue }></Counterapp>);

    fireEvent.click(screen.getByText('-1'));
    //screen.debug() me muestra el screen
    expect(screen.getByText('9')).toBeTruthy();

});

test('debe de funcionar el boton de reset', () => {

    render(<Counterapp value ={ 355 }></Counterapp>);
    fireEvent.click(screen.getByText('+1'));  
    fireEvent.click(screen.getByText('+1'));  
    fireEvent.click(screen.getByText('reset'));  

    fireEvent.click(screen.getByRole('button',{name:'btn-reset'} ))
    
    
    expect(screen.getByText(355)).toBeTruthy();


});

});

