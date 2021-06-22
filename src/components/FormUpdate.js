import React from 'react';
import Fill from './Fill';
import '../stylesheets/FormUpdate.scss';

const FormUpdate = (props) => {
  const handleFormUpdate = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="containerUpdate" onSubmit={handleFormUpdate}>
      <h3 className="containerUpdate__title">Update a comic here</h3>
      <Fill name={props.name} isbn={props.isbn} author={props.author} description={props.description} />
    </form>
  );
};

export default FormUpdate;
