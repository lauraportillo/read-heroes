import React from 'react';
import Form from './Form';
import '../stylesheets/UpdateComic.scss';

const UpdateComic = (props) => {
  return (
    <div className="containerUpdate">
      <h3 className="containerUpdate__title">Update a comic here</h3>
      <Form />
    </div>
  );
};

export default UpdateComic;
