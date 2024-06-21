import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

// import Index from './src/pages/src_27_Passing_parameters'//路由传参
// import Index from './src/pages/src_28_API' 
import Index from './src/pages/src_29_project' 
// import Index from './src/pages/src_17_AsyncStorage' 

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    )
  }
}

 
