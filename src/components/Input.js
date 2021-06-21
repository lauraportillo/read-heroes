import React from 'react';
import '../stylesheets/Input.scss';

function Input(props) {
  const handleInputEvent = (event) => {
    props.handleInput(event.target.name, event.target.value);
  };
  return (
    <>
      <label className="labels" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        onChange={handleInputEvent}
        className={`inputs ${props.className}`}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        required
      />
    </>
  );
}

export default Input;
