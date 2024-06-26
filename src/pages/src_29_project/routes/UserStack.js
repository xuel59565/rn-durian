import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, StyleSheet, View} from 'react-native';

import UserScreen from '../screens/User';
import AboutScreen from '../screens/User/About';
import LoginScreen from '../screens/NoAuth/Login';
import RegistrScreen from '../screens/NoAuth/Registr'



const Stack = createStackNavigator();
export default class UserStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Users"
          component={UserScreen}
          options={{
            title: '个人中心',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleStyle: {
              color: '#000',
              shadowOpacity: 0, //删除IOS上的阴影
            },
          }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: '关于'}}
        />
        <Stack.Screen name="Login" component={LoginScreen} 
          options={{title: '登錄'}}
          />  
           <Stack.Screen name="Registr" component={RegistrScreen} />
        {/* <Stack.Screen name="Counter" component={CounterScreen} /> */}
      
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
