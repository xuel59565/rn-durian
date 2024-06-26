import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeStack';
import UserScreen from './UserStack';
import NewsScreen from './NewsStack';

const Tab = createBottomTabNavigator();

export default function index() {
  return (
    <Tab.Navigator
      initialRouteName="News"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'planet' : 'planet-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f19c5d',
        inactiveTintColoe: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: '首页'}}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{title: '新闻'}}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{title: '用户'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
