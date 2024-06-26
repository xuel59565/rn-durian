import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from '../screens/News';
import DetailScreen from '../screens/News/Detail';

const Stack = createStackNavigator();
export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Newss"
        component={NewsScreen}
        options={{
          title: '新闻', //自定义标题栏的标题
          // 自定义标题栏样式
          headerStyle: {
            backgroundColor: '#fff', // 自定义标题栏背景颜色
          },
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={DetailScreen}
        options={{
          title: '新闻详情', //自定义标题栏的标题
          // 自定义标题栏样式
          headerStyle: {
            backgroundColor: '#fff', // 自定义标题栏背景颜色
          },
          headerTitleStyle: {
            color: '#000',
            shadowOpacity: 0, //删除IOS上的阴影
            height:0
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
