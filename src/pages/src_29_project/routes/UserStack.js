 import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserScreen from '../screens/User';

const Stack = createStackNavigator();
export default function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          title: '用戶', //自定义标题栏的标题
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
