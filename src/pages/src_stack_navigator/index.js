/*
 * @Author: Lily 103798802+xuel59565@users.noreply.github.com
 * @Date: 2024-06-07 12:28:10
 * @LastEditors: Lily 103798802+xuel59565@users.noreply.github.com
 * @LastEditTime: 2024-06-07 16:51:17
 * @FilePath: /RNTest1/src/pages/src_stack_navigator/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity, Alert} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// stact 导航
function HomeScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}> Home Screen</Text>

      <Button
        title={'跳到新闻页面'}
        onPress={() => prop.navigation.navigate('News')}
      />
    </View>
  );
}
function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}> News Screen</Text>
      <Button
        title={'跳到Home页面'}
        onPress={() => prop.navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default class index extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '首页',
          headerStyle:{
            backgroundColor:'tomato'
          },
          headerRight:()=>(
            <TouchableOpacity onPress={()=>alert('hello')}>
                <Text>hello</Text>
            </TouchableOpacity>
          )
        
        }}
        />
        <Stack.Screen name="News" component={NewsScreen} />
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
