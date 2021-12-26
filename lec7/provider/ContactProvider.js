import React from 'react';
import { fetchUsers } from '../api'

const ContactContext = React.createContext()

class ContactProvider extends React.Component {
  state = {
    contacts: null,
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    const contacts = await fetchUsers()
    this.setState({ contacts })
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