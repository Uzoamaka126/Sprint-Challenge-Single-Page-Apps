import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const CharacterUl = styled.ul`
  width: 100%;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 180px;
  /* flex-grow: */

  li {
    background: #eee;
    border: 1px solid #c4c4c4;
    width: 180px;
    max-width: 180px;
    padding: 10px;
  }

`

function CharacterCard({ character }) {
  // const [character, setCharacter] = useEffect();

  // const id = props.match.params.id;
  const { name, status, species, gender, location, image } = character;
  // if (props.image === "N/A") {
  //   return 'Empty Image'
  // } else {
  //   return <img 
  //             src={props.image}
  //         />
  // }
  console.log(character);
  if (!character) {
    return <div>Loading characters...</div>
  } else {
    return (
      <div>
        {/* <CharacterCard character={character} /> */}
        <div>
          <h6>{character.name}</h6>
          <img src={character.image} />
          {/* <p>{character.name}</p> */}
          <p>{character.status}</p>
          <p>{character.species}</p>
          {/* <p>{character.gender}</p>
          <p>{character.location}</p> */}
        </div>
      </div>
    )
  }
  
}

export default CharacterCard;
