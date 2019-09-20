import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  // const { name, species, status, gender, image } = props.characters;

  return (
    <section className="character-list">
    {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <h2>
      {/* {props.characters.map(character => (
          <CharacterCard 
            key={character.id} 
            name={character} 
            species={character.species}
            status={character.status}
            gender={character.gender}
            imgUrl={character.image}
            />
      ))} */}
      </h2>
  </section>
  );
}

// function CharacterDetails({ character }) {
//   return (
//     <CharacterCard character={character} />
//   )
// }
