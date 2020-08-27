import React from 'react';
import PropTypes from 'prop-types';
// import {TransitionGroup} from 'react-transition-group'

const ContactsList = ({ children }) => {
  return (
    <>
      <ul>{children}</ul>
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  filteredContacts: PropTypes.node,
};
