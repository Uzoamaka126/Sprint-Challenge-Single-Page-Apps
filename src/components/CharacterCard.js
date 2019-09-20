import React, { useState, useEffect } from "react";
import axios from 'axios';
// import CharacterCard from './CharacterCard';

function CharacterCard(props) {
  const [character, setCharacter] = useEffect();

  const id = props.match.params.id;
  const { name, status, species, gender, location, image } = props;
  // if (props.image === "N/A") {
  //   return 'Empty Image'
  // } else {
  //   return <img 
  //             src={props.image}
  //         />
  // }

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      console.log(res.data.results)
      setCharacter(res.data.results);
    })
    .catch(error => {
      console.error(error);
    })
  }, [id]);

  if (!character) {
    return <div>Loading characters...</div>
  }
  // const { }
  return (
    <div>
      {/* <CharacterCard character={character} /> */}
      <h2>{props.name}</h2>
    </div>
  )
}

export default CharacterCard;
