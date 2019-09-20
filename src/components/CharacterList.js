import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const api = 'https://rickandmortyapi.com/api/character/';

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get(api)
        .then(res => {
          // debugger
          setCharacters(res.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    console.log(characters)

    getCharacters();
  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map(character => (
        // debugger
        <Link to={`/character/${character.id}`}>
          <CharacterDetails key={character.id} character={character} />
        </Link>
      ))}
    </section>
  );
}

function CharacterDetails({ character }) {
  return (
    <CharacterCard character={character} />
  )
}
