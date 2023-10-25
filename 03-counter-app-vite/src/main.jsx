import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counterapp } from './Counterapp';
import { FirstApp } from './FirstApp';
import { Marcelo } from './NameApp';
import './stles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Counterapp value={1}></Counterapp>
        {/* <Marcelo></Marcelo> */}
    {/* <FirstApp title='Titulazo'></FirstApp> */}
    </React.StrictMode>

)


