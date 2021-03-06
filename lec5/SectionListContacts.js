import React from 'react'
import { SectionList, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const renderItem = ({ item }) => <Row {...item} />

const renderSectionHeader = ({ section }) => <Text style={styles.header}>{section.title}</Text>

const SectionListContacts = props => {
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    data: contactsByLetter[letter],
    title: letter,
  }))

  return <SectionList sections={sections} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
}

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 24,
  }
})

export default SectionListContacts
