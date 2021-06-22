import React from 'react';
import Fill from './Fill';
import '../stylesheets/FormCreate.scss';

const FormCreate = (props) => {
  const handleFormCreate = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="containerCreate" onSubmit={handleFormCreate}>
      <h3 className="containerCreate__title">Create new comic here</h3>
      <Fill name={props.name} isbn={props.isbn} author={props.author} description={props.description} />
    </form>
  );
};

export default FormCreate;
