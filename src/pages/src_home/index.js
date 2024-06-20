/*
 * @Author: Lily 103798802+xuel59565@users.noreply.github.com
 * @Date: 2024-05-27 15:45:33
 * @LastEditors: Lily 103798802+xuel59565@users.noreply.github.com
 * @LastEditTime: 2024-06-13 17:28:46
 * @FilePath: /RNTest1/src/pages/src_home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Alert,
  Button,
  StatusBar,
  Switch,
  ActivityIndicator,
  Dimensions,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';

export default class Index extends Component {
  createTwoButtonAlert = () => {
    Alert.alert('警告标题', '警告内容', [
      {
        text: '取消',
        onPress: () => console.log('Cancel'),
        style: 'cancel',
      },
      {
        text: '确定',
        onPress: () => console.log('OK'),
        style: 'default',
      },
    ]);
  };

  constructor() {
    super();
    this.state = {
      hideStatusBar: false,
      username: '',
    };
  }
  toggleStatusBar = () => {
    this.setState({
      hideStatusBar: !this.state.hideStatusBar,
    });
  };
  doLogin = () => alert(this.state.username);

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          style={[styles.ScrollView]}
          contentContainerStyle={{margin: 4}} //內邊距
          showsVerticalScrollIndicator={false} //隱藏垂直方向的滾動條
        >
          <View style={[styles.container]}>
            <StatusBar
              hidden={this.state.hideStatusBar}
              backgroundColor="red" //只有在安卓才有效果
              barStyle={'dark-content'}
            />
            <Switch
              trackColor={{false: '#999', true: 'green'}}
              backgroundColor={this.state.hideStatusBar ? 'red' : 'pink'}
              value={this.state.hideStatusBar}
              onValueChange={this.toggleStatusBar}
            />
            <ActivityIndicator color={'red'} size={'large'} />
            <Image
              style={[styles.itemImage]}
              source={require('./images/22.png')}
            />
            <TextInput
              style={[styles.input]}
              placeholder="請輸入"
              value={this.state.username}
              onChangeText={val => {
                this.setState({username: val});
              }}
            />
            <Button title="登錄，顯示輸入框值" onPress={this.doLogin} />
            <TouchableHighlight onPress={() => alert('觸碰高亮顯示')}>
              <Text> 觸碰高亮顯示 </Text>
            </TouchableHighlight>

            <TouchableOpacity onPress={() => console.log('觸碰透明度变化')}>
              <Text> 觸碰透明度变化 </Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => console.log('觸碰无响应')}>
              <Text> 觸碰无响应 </Text>
            </TouchableWithoutFeedback>
            <Button title="点我" onPress={() => alert('我是一个按钮')} />

            <Button
              title="Alert.alert"
              onPress={() => Alert.alert('我是一个按钮')}
              color={'pink'}
            />

            <Button
              title="两个按钮"
              onPress={this.createTwoButtonAlert}
              color={'red'}
            />
            <Text style={[styles.text]}>
              2024-05-31 17:11:22.077 xcodebuild[39255:9484154] DVTPlugInQuery:
           
            </Text>
          </View>
          {/* 安卓狀態的時候，底部滾動會被遮蓋，所以需要view支撐高度 */}
          <View style={{height: Platform.OS === 'ios' ? 0 : 100}}></View>
        </ScrollView>
        <ScrollView
            style={{backgroundColor: '#dfb'}}
            showsHorizontalScrollIndicator={false} //隱藏滾動條
            horizontal={true} //水平滾動
          >
            <Text style={[styles.nav]}>新聞</Text>
            <Text style={[styles.nav]}>娛樂</Text>
            <Text style={[styles.nav]}>體育</Text>
            <Text style={[styles.nav]}>財經</Text>
            <Text style={[styles.nav]}>軍事</Text>
            <Text style={[styles.nav]}>時尚</Text>
            <Text style={[styles.nav]}>科技</Text>
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    // padding: 80,
    flex: 1,
  },
  itemImage: {
    height: 80,
    width: Dimensions.get('window').width * 0.2,
  },
  input: {
    width: Dimensions.get('window').width - 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
  },
  text: {fontSize: 30},
  ScrollView: {
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
  nav: {
    margin: 10,
    height: 50,
    fontSize: 30,
  },
});
