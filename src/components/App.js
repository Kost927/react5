import React, { Component } from "react";
import "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./contactslist/ContactsList";
import ContactsListItem from "./ContactsListItem/ContactsListItem";
import Form from "./Form/Form";
import Alert from "./Alert/Alert";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: "",
    name: "",
    number: "",
    alert: false,
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  

  chengeFilter = filter => {
    this.setState({ filter });
  };

  findContacts = () => {
    // return this.state.filter
    //   ? this.state.contacts.filter((contact) =>
    //       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    //     )
    //   : this.state.contacts;
    const { filter, contacts } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts, alert} = this.state;
    const sameContact = contacts.map(contact => contact.name);
    if (sameContact.find(addedName => addedName === name)) {
      this.setState({alert: true})
      setTimeout (() => this.setState({alert: false}), 2000)
      // this.setState({alert: false})
    } else {
      this.setState(prevState => ({ contacts: [...prevState.contacts, { id: uuidv4(), name, number }] }));
    }
    this.setState({ name: "", number: "" });
  };

  addContact = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  removePhone = phoneId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== phoneId)
      };
    });
  };

  render() {
    const { filter, name, number, contacts, alert } = this.state;
    const filteredContacts = this.findContacts();
    return (
      <>
      <Alert name={name} alert={alert}/>
        <Form
          handleSubmit={this.handleSubmit}
          name={name}
          number={number}
          addContact={this.addContact}
          filter={filter}
          chengeFilter={e => this.chengeFilter(e.target.value)}
        />
        <ContactsList>
          <ContactsListItem filteredContacts={filteredContacts} contacts={contacts} removePhone={this.removePhone} />
        </ContactsList>
      </>
    );
  }
}

export default App;
