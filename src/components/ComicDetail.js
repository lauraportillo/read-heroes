import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/ComicDetail.scss';

const ComicDetail = (props) => {
  return (
    <article className="detail">
      <div className="detail__image">
        <img className="detail__image--photo" src={props.comic.image} alt={props.comic.name} />
      </div>
      <h2 className="detail__title">{props.comic.name}</h2>
      <h3 className="detail__subtitle">{props.comic.isbn}</h3>
      <h3 className="detail__subtitle">{props.comic.author}</h3>
      <p className="detail__description">{props.comic.description}</p>

      <Link className="detail__btn" to="/">
        <h3> {'<'} go back </h3>
      </Link>
    </article>
  );
};

export default ComicDetail;
