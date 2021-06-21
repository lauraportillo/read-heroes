import React from 'react';
import Input from './Input';
import '../stylesheets/Form.scss';

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="containerForm" onSubmit={handleForm}>
      <Input
        name="name"
        label="Title"
        placeholder=" Jessica Jones"
        classname=""
        value={props.name}
        handleInput={props.handleInput}
      />
      <Input
        name="author"
        label="Author"
        placeholder=" Brian Michael Bendis"
        classname=""
        value={props.author}
        handleInput={props.handleInput}
      />
      <Input
        name="isbn"
        label="Isbn"
        placeholder=" 0003"
        classname=""
        value={props.isbn}
        handleInput={props.handleInput}
      />

      <label className="containerForm__labels" htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
        placeholder=" Comic description... "
        name="description"
        required
        className="containerForm__inputs"
      ></textarea>
      <input type="submit" value="Submit >" class="containerForm__submit" />
    </form>
  );
};
export default Form;
