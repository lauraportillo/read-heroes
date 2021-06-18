// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Data
import data from '../data/data.json';
// Components
import Header from './Header';
import ComicList from './ComicList';
import Footer from './Footer';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

function App() {
  //estados
  const [comics] = useState(data);
  return (
    <div className="containerBody">
      <Header />
      <main className="containerMain">
        <Switch>
          <Route path="/" exact>
            <ComicList comics={comics} />
          </Route>
          <Route path="/detail" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
