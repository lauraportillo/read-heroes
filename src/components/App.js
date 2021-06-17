// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Data
import data from '../data/data.json';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

function App() {
  return (
    <div>
      <Header />
      <main className="containerMain">
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/about" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
