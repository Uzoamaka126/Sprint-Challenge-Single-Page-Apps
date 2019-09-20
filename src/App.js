import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import axios from 'axios';

const api = 'https://rickandmortyapi.com/api/character/';

export default function App() {
  const [ charactersData, setCharactersData ] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // const addToCharacterList = character => {
  //   setAllCharacters( [...allCharactersList, character] );
  // };
  const onSearch = evt => {
    setSearchInput(evt.target.value)
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
        .get(api)
        .then(res => {
          // debugger
          // console.log(res);
          // console.log(res.data);
          // console.log(res.data.results);
          // debugger
          setCharactersData(res.data.results);
          console.log(charactersData)
        })
        .catch(error => {
          console.log('Server Error', error);
        });
  }, []);

  if (charactersData) {
    return (
     <Router>
        <main>
          <Header />
          {/* <SearchForm onSearch={onSearch} searchInput={searchInput} /> */}
          <nav>
            <Link to="/">Home</Link>
            <Link to="/welcome">Welcome</Link>
            <Link to="/characters">List of Characters</Link>
          </nav>
        <Route exact path='/welcome' component={WelcomePage} />
        <Route  exact path='/characters' 
          render={() => <CharacterList characterList={charactersData}/>}
        />
        {/* <Route  exact path='/charact' component={CharacterList} /> */}

      </main>
     </Router>
    );
  } else {
    return (
      <div>
        <h1>Character Data Loading...</h1>
      </div>
    )
  }
}
