import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const StyledCharacterPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, .8);
    margin: 2% 0;
    padding: 2%;
    color: black;
    width: 90%;
    border-radius: 10px;
`

export function Character({ character, setOpenCharacter }) {

    return (
        <StyledCharacterPanel 
        onClick={
        () => {setOpenCharacter(character);}}>
            <h2>{character.name}</h2>
            <h3>Birth Year: {character.birth_year}</h3>
        </StyledCharacterPanel>
    );
}

