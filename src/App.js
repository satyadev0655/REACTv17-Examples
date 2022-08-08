import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Preferences from './Preferences';
import { useHistory } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push('/dashboard');
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <HomeButton />
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
