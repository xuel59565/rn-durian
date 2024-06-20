/*
 * @Author: Lily 103798802+xuel59565@users.noreply.github.com
 * @Date: 2024-06-12 15:06:38
 * @LastEditors: Lily 103798802+xuel59565@users.noreply.github.com
 * @LastEditTime: 2024-06-13 16:56:17
 * @FilePath: /RNTest1/src/pages/src_24_drawer/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable react/no-unstable-nested-components */
import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
 
function HomeScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>HomeScreen</Text>
      <Button
        title={'Open Drawer'}
        onPress={() => prop.navigation.openDrawer()}
      />
      <Button
        title={'Toggle Drawer'}
        onPress={() => prop.navigation.toggleDrawer()}
      />
    </View>
  );
}

function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>NewsScreen</Text>
      <Button
        title={'Open Drawer'}
        onPress={() => prop.navigation.openDrawer()}
      />
      <Button
        title={'跳转到Home页面'}
        onPress={() => prop.navigation.navigate('Home')}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default class Index extends Component {
  render() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#f4f4f4',
            width: 180,
          },
          drawerPosition: 'right', // 控制菜单从左left或者右right弹出
          drawerType: 'slide', // 菜单的滑动形式
          drawerActiveTintColor: 'tomato', // 当前激活的菜单颜色xxx
          // 设置菜单项的样式
          drawerItemStyle: {
            marginVertical: 20,
          },
        }}>
        <Drawer.Screen
          options={{
            title: '首页', // 自定义当前项的标题
            drawerIcon: ({focused, color, size}) => {
              let iconName = '';
              iconName = focused ? 'home' : 'home-outline';
              return <Icon name={iconName} size={size} color={color} />;
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{
            title: '新闻', // 自定义当前项的标题
            drawerIcon: ({focused, color, size}) => {
              let iconName = '';
              iconName = focused ? 'person' : 'person-outline';
              return <Icon name={iconName} size={size} color={color} />;
            },
          }}
          name="News"
          component={NewsScreen}
        />
      </Drawer.Navigator>
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