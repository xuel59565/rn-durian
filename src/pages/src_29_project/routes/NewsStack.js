import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from '../screens/News';

const Stack = createStackNavigator();
export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: '新闻', //自定义标题栏的标题
          // 自定义标题栏样式
          headerStyle: {
            backgroundColor: 'tomato', // 自定义标题栏背景颜色
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
