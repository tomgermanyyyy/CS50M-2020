import React from 'react';
import AddContactForm from '../AddContactForm';

import { ContactContext } from '../provider/ContactProvider';

export default class AddContactScreen extends React.Component {
  // handleSubmit = (formState) => {
  //   state.addContact(formState);
  //   this.props.navigation.navigate('ContactList', { contacts: state.contacts })
  // }

  render() {
    return (
      <ContactContext.Consumer>
        {
          state => (
            <AddContactForm
              onSubmit={(formState) => {
                state.addContact(formState);
                this.props.navigation.navigate('ContactList', { contacts: state.contacts })
              }}  
            />
          )
        }
      </ContactContext.Consumer>
    );
  }
}