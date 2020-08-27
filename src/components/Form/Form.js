import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';
import {CSSTransition} from 'react-transition-group';

const Form = ({
  handleSubmit,
  name,
  addContact,
  filter,
  chengeFilter,
  number
}) => {
  return (
    <>
      <CSSTransition
      in={true}
      appear={true}
      classNames={css}
      timeout={500}
      unmountOnExit
      >
        <h2 className={css.title} >Phonebook</h2>
      </CSSTransition>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{' '}
          <input type="text" value={name} name="name" onChange={addContact} />
        </label>

        <label>
          Number:{' '}
          <input
            type="tel"
            value={number}
            name="number"
            onChange={addContact}
          />
        </label>

        <button type="submit">Add contacts</button>
      </form>

      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      

      <label>
        Filter:{' '}
        <input
          type="text"
          value={filter}
          name="filter"
          onChange={chengeFilter}
        />
      </label>

    </>
  );
};

export default Form;

Form.propTypes = {
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  addContact: PropTypes.func,
  filter: PropTypes.string,
  chengeFilter: PropTypes.func,
  number: PropTypes.string,
};
