import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Weather } from './components/Weather';
import { Search } from './components/Search';
import { DefaultWeather } from './components/DefaultWeather';



export const App = () =>{

    return (
        <div>
            <Search/>
            <Weather/>
            
        </div>
    ) 
    
}

