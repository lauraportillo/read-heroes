import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/ComicDetail.scss';

const ComicDetail = (props) => {
  return (
    <article className="detail">
      <div className="detail__image">
        <img className="detail__image--photo" src={props.comic.image} alt={props.comic.name} />
      </div>
      <div className="detail__info">
        <h2 className="detail__info--title">{props.comic.name}</h2>
        <h3 className="detail__info--subtitle">
          <span className="title">Isbn:</span> {props.comic.isbn}
        </h3>
        <h3 className="detail__info--subtitle">
          <span className="title">Author:</span> {props.comic.author}
        </h3>
        <p className="detail__info--description">
          <span className="title">Description:</span> {props.comic.description}
        </p>
      </div>

      <Link className="detail__btn" to="/">
        <h3> {'<'} go back </h3>
      </Link>
    </article>
  );
};

export default ComicDetail;
