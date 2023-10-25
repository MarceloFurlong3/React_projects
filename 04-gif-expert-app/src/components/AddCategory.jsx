import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('Escribir Gift')
  
    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }

    const onSubmit = (e) => {
         e.preventDefault()
         if(inputValue.trim() <= 1 ) return;

         onNewCategory(inputValue.trim())
         setinputValue(" ")
    }
  
    return (

   <form onSubmit={onSubmit}>
     <input
        type="text"
        placeholder="buscar gif "
        value={inputValue}
        onChange={onInputChange}
     />
    </form>
    
    
    
    
    
    
   
    





  )
}

export default AddCategory;