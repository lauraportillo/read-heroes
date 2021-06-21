import React from 'react';
import Form from './Form';
import '../stylesheets/CreateComic.scss';

const CreateComic = (props) => {
  return (
    <div className="containerCreate">
      <h3>Create new comic here</h3>
      <Form />
    </div>
  );
};

export default CreateComic;
