import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const MTab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Home Screen</Text>
    </View>
  );
}

function NewsScreen() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>News Screen</Text>
    </View>
  );
}

export default class index extends Component {
  render() {
    return (
      <MTab.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          // tabBar的整体样式
          tabBarStyle: {
            borderWidth: 1,
            borderColor: 'grey',
          },
          // 标签样式
          tabBarLabelStyle: {
            fontSize: 20,
          },
          tabBarActiveTintColor: 'tomato', // 当前标签页标签激活时的颜色
          tabBarInactiveTintColor: '#666', // 当前标签页标签未激活时的颜色
          tabBarShowIcon: true, //是否显示图标
        }}>
        <MTab.Screen
          name="home"
          component={HomeScreen}
          options={{title: '首页',tabBarIcon:({focused,color})=>{
            return (
                <Icon name={focused ? 'home':'home-outline'} size={20} color={color}/>
            )

          }}}
        />
        <MTab.Screen
          name="news"
          component={NewsScreen}
          options={{title: '新闻',tabBarIcon:({focused,color})=>{
            return (
                <Icon name={focused ? 'aperture' : 'aperture-outline'} size={23} color={color}/>
            )
          }}}
        />
      </MTab.Navigator>
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
