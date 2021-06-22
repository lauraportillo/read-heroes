import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import '../stylesheets/Fill.scss';

const Fill = (props) => {
  return (
    <section className="containerFill">
      <Input
        name="name"
        label="Title"
        placeholder=" Jessica Jones"
        className=""
        value={props.name}
        handleInput={props.handleInput}
      />
      <Input
        name="author"
        label="Author"
        placeholder=" Brian Michael Bendis"
        className=""
        value={props.author}
        handleInput={props.handleInput}
      />
      <Input
        name="isbn"
        label="Isbn"
        placeholder=" 0003"
        className=""
        value={props.isbn}
        handleInput={props.handleInput}
      />

      <Textarea
        name="description"
        label="Description"
        placeholder=" Comic description..."
        className=""
        value={props.description}
        handleInput={props.handleInput}
      />

      <input type="submit" value="Submit >" className="containerFill__submit" />
    </section>
  );
};
export default Fill;
