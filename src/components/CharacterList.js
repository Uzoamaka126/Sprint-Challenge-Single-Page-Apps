import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';


const api = 'https://rickandmortyapi.com/api/character/';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(api)
    .then(res => {
      setCharacters(res.data.results)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <section className="character-list">
    {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <div>
        {characters.map(character => (
          <CharacterCard 
            key={character.id} 
            name={character} 
            species={character.species}
            status={character.status}
            gender={character.gender}
            imgUrl={character.image}
            />
        ))}
      </div>
  </section>
  );
}

// function CharacterDetails({ character }) {
//   return (
//     <CharacterCard character={character} />
//   )
// }
