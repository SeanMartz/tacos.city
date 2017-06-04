/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TacoList from './components/taco_list'
export default class tacosCity extends Component {
  render() {
    return (
    <View style={styles.appContainer}>
      
        <View style={styles.main}>
          <TacoList />
        </View>
      </View>

    );
  }
}

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

AppRegistry.registerComponent('tacosCity', () => tacosCity);
