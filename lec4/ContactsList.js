import React from 'react';
import { SectionList, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row'

const renderItem = ({ item }) => <Row {...item} />

const renderSectionHeader = obj => <Text style={styles.header}>{obj.section.title}</Text>

const ContactsList = props => {
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()

    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    title: letter,
    data: contactsByLetter[letter],
  }))

  return (
    <SectionList
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
    />
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 24,
  }
})

export default ContactsList