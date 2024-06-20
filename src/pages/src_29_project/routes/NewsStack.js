/*
 * @Author: Lily 103798802+xuel59565@users.noreply.github.com
 * @Date: 2024-06-19 16:57:17
 * @LastEditors: Lily 103798802+xuel59565@users.noreply.github.com
 * @LastEditTime: 2024-06-19 17:14:00
 * @FilePath: /Durian/src/pages/src_29_project/routes/HomeStack.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
          // headerRight: () => {
          //   return (
          //     <TouchableOpacity onPress={() => Alert.alert('Hello')}>
          //       <Text style={{marginRight: 15}}>Hello</Text>
          //     </TouchableOpacity>
          //   );
          // },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
