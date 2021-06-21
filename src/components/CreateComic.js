import React from 'react';
import Form from './Form';
import '../stylesheets/CreateComic.scss';

const CreateComic = (props) => {
  return (
    <div>
      <h3>Create a new comic by entering its data</h3>
      <Form />
    </div>
  );
};

export default CreateComic;
