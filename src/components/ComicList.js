import React from 'react';
import Comic from './Comic';
import '../stylesheets/ComicList.scss';

const ComicList = (props) => {
  const renderComic = props.comics.map((comic) => {
    return (
      <li key={comic.isbn.toString()}>
        <Comic comic={comic} />
      </li>
    );
  });

  return (
    <div className="">
      <ul className="ComicList">{renderComic}</ul>
    </div>
  );
};

export default ComicList;
