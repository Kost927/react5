import React from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import css from "./ContactsListItem.module.css";

const ContactsListItem = ({ filteredContacts, removePhone }) => {
  return (
    <>
    <TransitionGroup>
      {filteredContacts.map(contact => (
        <CSSTransition key={contact.id} timeout={1000} classNames={css}>
        <li name="name">
          {contact.name}: {contact.number}
          <button type="button" onClick={() => removePhone(contact.id)}>
            Delete
          </button>
        </li>
        </CSSTransition>
      ))}
      </TransitionGroup>
    </>
  );
};

export default ContactsListItem;

ContactsListItem.propTypes = {
  filteredContacts: PropTypes.array,
  removePhone: PropTypes.func,
};
