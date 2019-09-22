import React, { useState } from "react";

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
    <section className="search-form">
     <form>
      <input 
        // type="search" 
        // value={searchValue}
        onChange={props.onSearch}
      />
      {/* <button onClick={callSearchFunction}>Search</button> */}
     </form>
    </section>
  );
}
