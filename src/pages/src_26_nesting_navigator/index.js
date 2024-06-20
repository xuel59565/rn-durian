/*
 * @Author: Lily 103798802+xuel59565@users.noreply.github.com
 * @Date: 2024-06-13 16:52:49
 * @LastEditors: Lily 103798802+xuel59565@users.noreply.github.com
 * @LastEditTime: 2024-06-14 11:28:02
 * @FilePath: /RNTest1/src/pages/src_26_nesting_navigator/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../src_home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Feed(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Feed</Text>
      <Button
        title={'去 HomeScreen'}
        onPress={() => props.navigation.navigate('Homeq')}
      />
      <Button
        title={'去 Profile'}
        onPress={() => props.navigation.navigate('Profile')}
      />
      <Button
        title={'去 Settings'}
        onPress={() => props.navigation.navigate('Settings')}
      />
    </View>
  );
}
function Messages(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Messages</Text>
      <Button
        title={'去Feed'}
        onPress={() => props.navigation.navigate('Feed')}
      />
    </View>
  );
}

function Profile(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Profile</Text>
      <Button
        title={'去Feed'}
        onPress={() => props.navigation.navigate('Feed')}
      />
    </View>
  );
}

function Settings(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Settings</Text>
      <Button
        title={'Open Drawer'}
        onPress={() => props.navigation.navigate('Feed')}
      />
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages}    options={{
          title: '信息',
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name={focused ? 'aperture' : 'aperture-outline'}
                size={23}
                color={color}
              />
            );
          },
        }}/>
      <Stack.Screen
        name="Homeq"

        component={HomeScreen}
        options={{
          title: '主頁',
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name={focused ? 'aperture' : 'aperture-outline'}
                size={23}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default class index extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={Profile}  />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
