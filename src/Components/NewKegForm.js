import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewKegForm(props) {
  function handleAddingNewKegToList(event) {
    event.preventDefault();
    props.onNewKegCreation({
      id: v4(),
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      content: parseInt(event.target.content.value),
      pints: parseInt(124),
    })
  }
  return(
    <React.Fragment>
      <form onSubmit={props.onNewKegCreation}>
        <input 
          type='text'
          name='name' 
          placeholder='Keg Name'/>
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' />
        <input
          type='text'
          name='price'
          placeholder='Keg Price' />
        <input 
          type='text'
          name='alcohol'
          placeholder='Alcohol Content' />
        <button type='submit'>Submit new keg</button>
      </form>
    </React.Fragment>
  );
}