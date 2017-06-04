import React, { Component } from 'react'
import { Text, View } from 'react-native'


import tacosApi from '../services/api/tacoJoints'
import Event from './taco_joint.js'


export default class ExplorePage extends Component {
  

  constructor(props) {
      super(props)
      this.state = {
          data: []
      };
       
  }

  getNumberOfEvents() {
    return 2
  }
componentWillMount(){
  tacosApi.getTacoJoints().then((tacos) => { 
      this.setState({data: tacos.results});
    });
}
  render() {
    
    return (
      
      <View>
        {this.state.data.map((taco)=>{ 
          return (
            <Text> {taco.name}</Text>
          )
        })}
      </View>
    )
  }

 
}