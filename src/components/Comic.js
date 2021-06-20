import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Comic.scss';

const Comic = (props) => {
  return (
    <Link to={`/comic/${props.comic.id}`}>
      <article className="comic">
        <div className="comic__image">
          <img className="comic__image--photo" src={props.comic.image} alt={props.comic.name} />
        </div>
        <h2 className="comic__title">{props.comic.name}</h2>
      </article>
    </Link>
  );
};

export default Comic;
