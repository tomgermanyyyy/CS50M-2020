import React from 'react';
import contacts from '../contacts'

const ContactContext = React.createContext()

class ContactProvider extends React.Component {
  state = {
    contacts: contacts,
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }

  render() {
    return (
      <ContactContext.Provider
        value={{
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}
      >
        {this.props.children}
      </ContactContext.Provider>
    )
  }
}

export { ContactProvider, ContactContext }