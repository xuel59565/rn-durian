/*
 * @Author: Lily 103798802+xuel59565@users.noreply.github.com
 * @Date: 2024-06-07 17:20:43x
 * @LastEditors: Lily 103798802+xuel59565@users.noreply.github.com
 * @LastEditTime: 2024-06-12 15:12:19
 * @FilePath: /RNTest1/src/pages/src_bottom_tab/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

function HomeScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}> Home Screen</Text>
       </View>
  );
}
function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}> News Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();


export default class index extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused? 'home':'home-outline'
            } else if (route.name === 'News') {
              iconName = focused? 'planet':'planet-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          inactiveTintColoe: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
  
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
