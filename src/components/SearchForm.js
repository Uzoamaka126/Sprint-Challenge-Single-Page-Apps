import React, { useState } from "react";
import styled from 'styled-components';



const SearchDiv = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
`;
const FormSearch = styled.form`
  width: 100%;
  height: 40px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  display: flex;

  input {
    width: 85%;
    height: 100%;
    max-height: 100%;
    border: none;
    background: transparent;
  }
  button {
    width: 15%;
    background: #00aaeb;
    outline: none;
    border: 1px solid transparent;
    color: #fff;
    font-size: 16px;
    padding: 5px;
  }
`;
export default function SearchForm(props) {
  // const [searchValue, setSearchValue] = useState("");
  
  // const handleSearchInputChanges = event => {
  //   setSearchValue(event.target.value);
  // }

  // const resetSearchField = () => {
  //   setSearchValue("");
  // }

  // const callSearchFunction = (event) => {
  //   event.preventDefault();
  //   props.search(searchValue);
  //   resetSearchField();
  // }
  
  
  return (
    <SearchDiv className="search-form">
     <FormSearch>
      <input 
        // type="search" 
        // value={searchValue}
        onChange={props.onSearch}
      />
      <button>Search</button>
     </FormSearch>
    </SearchDiv>
  );
}
