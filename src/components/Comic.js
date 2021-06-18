import React from 'react';
import '../stylesheets/Comic.scss';

const Comic = (props) => {
  return (
    <article className="comic">
      <div className="comic__image">
        <img className="comic__image--photo" src={props.comic.image} alt={props.comic.name} />
      </div>
      <h2 className="comic__title">{props.comic.name}</h2>
    </article>
  );
};

export default Comic;
