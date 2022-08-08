import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export function Dashboard() {
  return <h2>Dashboard</h2>;
}

export function Preferences() {
  return <h2>Preferences</h2>;
}

function Test() {
  return <h1 className="clr">Hello World</h1>;
}
const element = <App />;

ReactDOM.render(element, document.getElementById('root'));
