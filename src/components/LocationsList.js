import React, { useEffect, useState } from "react";

export default function LocationsList() {
    const api = 'https://rickandmortyapi.com/api/location/';

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

}
