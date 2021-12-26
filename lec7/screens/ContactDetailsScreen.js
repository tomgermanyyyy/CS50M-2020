import React from 'react';
import { Button, Text, View } from 'react-native';

import { ContactContext } from '../provider/ContactProvider'

export default function ContactDetailsScreen({ navigation, route }) {
  // _goToRamdom = () => {
  //   const { contacts } = state
  //   const phone = route.params.phone
  //   let randomContact
  //   while (!randomContact) {
  //     const randomIndex = Math.floor(Math.random() * 10)
  //     if (contacts[randomIndex].phone !== phone) {
  //       randomContact = contacts[randomIndex]
  //     }
  //   }

  //   navigation.push('ContactDetails', {
  //     name: randomContact.name,
  //     phone: randomContact.phone,
  //   })
  // }

  return (
    <ContactContext.Consumer>
      {
        state => (
          <View>
            <Text>{route.params.phone}</Text>
            <Button
              title="Go to random contact"
              onPress={() => {
                const { contacts } = state
                const phone = route.params.phone
                let randomContact
                while (!randomContact) {
                  const randomIndex = Math.floor(Math.random() * contacts.length)
                  if (contacts[randomIndex].phone !== phone) {
                    randomContact = contacts[randomIndex]
                  }
                }

                navigation.push('ContactDetails', {
                  ...randomContact,
                })
              }}
            />
          </View>
        )
      }
    </ContactContext.Consumer>
  )
}
