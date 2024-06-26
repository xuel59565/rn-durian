import {StyleSheet, Text,  TouchableOpacity, Alert} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import TakePictureScreen from '../screens/Home/TakePicture';


const Stack = createStackNavigator();
export default class HomeStack extends Component {

  render() {
    return (
      <Stack.Navigator >
      <Stack.Screen
        name="Homes"
        component={HomeScreen}
        options={{
          title: '首页',
          headerStyle: {
            backgroundColor: '#f19c5d',
            elevation: 0, //删除android上的阴影
            shadowOpacity: 0, //删除IOS上的阴影
          },
          headerTintColor: '#e9dfb8',
          headerRight: () => {
            return (
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('TackPicture')}>
                <Text style={{fontSize: 18, color: '#e9dfb8', marginRight: 10}}>
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
            backgroundColor: '#505f59',
          },
          headerTintColor: '#f2ecd3',
        }}
      />
    </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
