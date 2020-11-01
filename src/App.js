import React, { useState } from 'react';
import './App.css';



function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

const search = evt => {
  if (evt.key === "Enter") {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=0dab5eddf0fd42089995a0bbd0932c3f`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
  }
}
    
                  return(
                  
                  <div className="search">
                     
                     <input type="search"
                      className="search-bar" 
                      placeholder="Search" 
                      onChange={e => setQuery(e.target.value)}
                      value={query}
                      onKeyPress={search}
                      />
                    

                  <div>{weather.name} {weather.main.temp}</div>

                  </div>
                     
                  
                  );
              }
        
    
export default App;