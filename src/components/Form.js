import React from 'react';
import Input from './Input';
import '../stylesheets/Form.scss';

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="main-cards__sections--form" onSubmit={handleForm}>
      <Input
        name="name"
        label="Nombre completo*"
        placeholder="Ej: Sally Jill"
        classname=""
        value={props.name}
        handleInput={props.handleInput}
      />
    </form>
  );
};
export default Form;
