import React, { useState, useEffect } from "react";
import axios from 'axios';
// import CharacterCard from './CharacterCard';

function CharacterCard(props) {
  const [character, setCharacter] = useEffect();

  const id = props.match.params.id;
  // const { name, status, species, gender, location, image } = props.characters;
  // if (props.image === "N/A") {
  //   return 'Empty Image'
  // } else {
  //   return <img 
  //             src={props.image}
  //         />
  // }

  if (!character) {
    return <div>Loading characters...</div>
  }
  // const { }
  return (
    <div>
      {/* <CharacterCard character={character} /> */}
      <h2>

        
      </h2>
    </div>
  )
}

export default CharacterCard;
