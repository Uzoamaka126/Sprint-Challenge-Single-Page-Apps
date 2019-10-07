import React from "react";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import SearchForm from './SearchForm';

const AppHeader = styled.nav`
  margin: 0;
  padding: 10px;
  color: #fff;
  font-size: 24px; 


  
  
`

export default function Header() {
  return (
    <AppHeader>
      <h1 className="ui center">Welcome to the ultimate fan site!</h1>
      <div>
        <SearchForm />
      </div>
    </AppHeader>
  );
}
