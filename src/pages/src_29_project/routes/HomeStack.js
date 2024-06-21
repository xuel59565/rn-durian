import {StyleSheet, Text,  TouchableOpacity, Alert} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import TakePictureScreen from '../screens/Home/TakePicture';


const Stack = createStackNavigator();
export default class HomeStack extends Component {

  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '首页',
          headerStyle: {
            backgroundColor: '#455127',
          },
          headerTintColor: '#f2ecd3',
          headerRight: () => {
            return (
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('TackPicture')}>
                <Text style={{fontSize: 18, color: '#f2ecd3', marginRight: 10}}>
                  拍照
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="TackPicture"
        component={TakePictureScreen}
        options={{
          title: '拍照',
          headerStyle: {
            backgroundColor: '#455127',
          },
          headerTintColor: '#f2ecd3',
        }}
      />
    </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
