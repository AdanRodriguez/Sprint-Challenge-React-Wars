import React, {useState, useEffect} from 'react';
import StarWars from "./components/StarWarsCard"
import './App.scss';
import axios from 'axios';


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


const App = () => {

const [state, setState] = useState([]);

useEffect(() => {
  axios.get("https://swapi.co/api/people/")
  .then(response => {
    setState(response.data.results);
  })
  .catch(err =>
    console.log(err))
}, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div id="cards">
      {state.map((character) =>{
          return <StarWars key={character.name} 
                          name={character.name} 
                          age={character.birth_year}
                          height={character.height}
                          mass={character.mass}
                          hair={character.hair_color}   
                          eye={character.eye_color} 
                          gender={character.gender} 

          />
        })
      }</div>
    </div>
  );
}

export default App;
