import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';
import './App.css';

const StyledHeader = styled.div`
  width: 100;
  height: 20vh;
  background-color: blue;
  color: white;
`
const StyledCharacterList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 3% auto;
  align-items: center;
`

const App = () => { 
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then((res) => {
      setCharacters(res.data);
      console.log(res.data);

    })
    .catch((err) => {
      console.error(err);
    })
  }, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className='App'>
      <StyledHeader>
        <h1>Star Wars Characters</h1>
      </StyledHeader>
      <StyledCharacterList>
        {characters.map((character) => (
          <Character character={character} key={character.id}/>))}
      </StyledCharacterList>
    </div>
  );
}

export default App;
