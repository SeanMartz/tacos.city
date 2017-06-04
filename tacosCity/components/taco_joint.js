import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'
// import PropTypes from 'prop-types'

// import styles from './event_styles'

const Event = ({
  event: {
    name,
    eventDate,
   
    location: {
      address: {
        name: locationName,
      },
    },
  }
}) => (
  <View style={styles.eventContainer}>
    <View style={styles.leftCol}>
      <Text style={styles.title}>{name}</Text>
      <Text>{eventDate}</Text>
      <View style={[ styles.row, styles.spaceBetween ]}>
        <View style={styles.row}>
          
          <Text>1 mi</Text>
        </View>
        <Text>{locationName}</Text>
      </View>
    </View>
        <Text> __________________</Text>
  </View>

)


const styles = StyleSheet.create({
  


  appContainer: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  main: {
    flex: 1,
  },
  itemContainer: {
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// Event.propTypes = {
//   event: PropTypes.shape({
//     name: PropTypes.string,
//     eventDate: PropTypes.string,
//     organizer: PropTypes.shape({
//       name: PropTypes.string,
//     }),
//     location: PropTypes.shape({
//       address: PropTypes.shape({
//         name: PropTypes.string,
//       }),
//     }),
//   }),
// }

export default Event
