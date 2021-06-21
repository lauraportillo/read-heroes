import React from 'react';
import Input from './Input';
import ImageForm from './ImageForm';
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
      {/* <Input
        name="description"
        label="Description"
        placeholder=" Enter a comic description"
        classname=""
        value={props.description}
        handleInput={props.handleInput}
      /> */}

      <label className="" htmlFor="description">
        Description
      </label>
      <textarea id="description" placeholder="¿Qué necesitas?" name="description" required className=""></textarea>

      <ImageForm />
    </form>
  );
};
export default Form;
