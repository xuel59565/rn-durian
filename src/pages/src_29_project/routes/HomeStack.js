import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Home/Camera';

const Stack = createStackNavigator();


export default function HomeStack() {
  const navigation = useNavigation();
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
              <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <Text style={{fontSize: 18, color: '#f2ecd3', marginRight: 10}}>
                  拍照
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: '摄像机',
          headerStyle: {
            backgroundColor: '#455127',
          },
          headerTintColor: '#f2ecd3',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
