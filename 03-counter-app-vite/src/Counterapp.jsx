import {useState} from 'react'
import PropTypes from 'prop-types';


export const Counterapp = ({ value }) => {
    
    const [counter,setCounter] = useState(value)
    
    const handleadd = () => {

      //setCounter( counter + 1 );

        setCounter((c) =>  c + 1)
    }
    
    const takeout = () => { setCounter(counter - 1)}
    
    const reset = () => { setCounter(() => value) }

   return (
    <>
    
    <h1>CounterApp</h1>
    
    <h2> { counter } </h2>

    <button onClick={ handleadd } > 
        +1
    </button>

    <button onClick={takeout}> 
        -1 
    </button>

    <button aria-label="btn-reset" onClick={reset}>
        reset 
    </button>

    </>
);
}

Counterapp.protoTypes = {
    value:PropTypes.number.isRequired
}


//rafc tab creamos un funcional component