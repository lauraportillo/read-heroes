// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Data
import data from '../data/data.json';
// Components
import Header from './Header';
import ComicList from './ComicList';
import ComicDetail from './ComicDetail';
import Footer from './Footer';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

function App() {
  //estados
  const [comics] = useState(data);

  // cada comic tiene que tener su enlace
  const renderComicDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const comicFound = comics.find((comic) => comic.id === id);

    if (comicFound) {
      return <ComicDetail comic={comicFound} />;
    }
  };

  return (
    <div className="containerBody">
      <Header />
      <main className="containerMain">
        <Switch>
          <Route path="/" exact>
            <ComicList comics={comics} />
          </Route>
          <Route path="/comic/:id" render={renderComicDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
