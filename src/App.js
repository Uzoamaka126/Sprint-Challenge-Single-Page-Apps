import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import axios from 'axios';
import SearchForm from './components/SearchForm'

const api = 'https://rickandmortyapi.com/api/character/';

export default function App() {

  const [ charactersData, setCharactersData ] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  // const [ searchable, setSearchable ] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const onSearch = (event) => {
    setSearchInput(event.target.value)
  }

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   axios.get(`https://rickandmortyapi.com/api/character/?name=${searchInput}`)
  //   .then(res => setCharactersData(res.data));
  // };

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
          // setSearchable(false);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
  }, []);
  console.log(charactersData)

  // const onSearch = (event) => {
  //   event.preventDefault();
  //   setSearchable(true);
    
  //   axios.get(`https://rickandmortyapi.com/api/character/?name=${searchInput}`)
  //     .then(res => res.data)
  //     .then(res => {
  //       if(res) {
  //         const searchResult = res.data.filter(item => item.name)
  //         setCharactersData(searchResult);
          
  //       } else {
  //         setErrorMessage('not found');
  //       }
  //     })
  // }

  if (charactersData) {
    return (
     <Router>
        <main>
          <Header />
          <SearchForm onSearch={onSearch} searchInput={searchInput} />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/location">Location</Link>
          </nav>
        <Route path='/welcome' component={WelcomePage} />
        {/* <Route 
          path='/characters'
          render={() => (
            <SearchForm
              search={searchApp}
            />
          )}
          /> */}
        <Route 
          path='/characters' 
          render={() => <CharacterList characterList={charactersData.filter(char => {
            return char.name.includes(searchInput);
          })} />}
        />
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
