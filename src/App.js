import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import {GlobalStyle} from './styled-components/GlobalStyled'
import Home from './pages/Home'
import About from './pages/About'
import Tenders from './pages/Tenders'
import Vacancies from './pages/Vacancies'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/about'><About /></Route>
        <Route exact path='/tenders'><Tenders /></Route>
        <Route exact path='/vacancies'><Vacancies /></Route>
      </Switch>
    </>
  );
}

export default App;
