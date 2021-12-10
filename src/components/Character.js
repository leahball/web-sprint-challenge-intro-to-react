import React from 'react';
import styled from 'styled-components';

const StyledCharacterPanel = styled.div`
    color: white;
    width: 100%;
`

function Character({ character, characterId}) {
    return (
        <StyledCharacterPanel>
            <h2>{character.name}</h2>
        </StyledCharacterPanel>
    )
}

export default Character;