// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// Data
import data from '../data/data.json';
// Components
import Header from './Header';
import FormCreate from './FormCreate';
import FormUpdate from './FormUpdate';
import ComicList from './ComicList';
import ComicDetail from './ComicDetail';
import Footer from './Footer';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

function App() {
  // State
  const [comics] = useState(data);
  // en este objeto guardamos los nuevos comics
  const [newdata, setNewdata] = useState({
    id: uuidv4(),
    name: '',
    isbn: '',
    author: '',
    description: '',
  });

  // Each comic needs a link
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
          <Route path="/create" component={FormCreate} />
          <Route path="/update" component={FormUpdate} />
          <Route path="/comic/:id" render={renderComicDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
