import React from 'react';
import Comic from './Comic';
import '../stylesheets/ComicList.scss';

const ComicList = (props) => {
  const renderComic = props.comics.map((comic) => {
    return (
      <li key={comic.id}>
        <Comic comic={comic} />
      </li>
    );
  });

  return (
    <div>
      <ul className="comicList">{renderComic}</ul>
    </div>
  );
};

export default ComicList;
