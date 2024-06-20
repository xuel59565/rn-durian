/*
 * @Author: Lily 103798802+xuel59565@users.noreply.github.com
 * @Date: 2024-06-19 10:47:51
 * @LastEditors: Lily 103798802+xuel59565@users.noreply.github.com
 * @LastEditTime: 2024-06-19 16:39:33
 * @FilePath: /Durian/src/pages/src_28_API/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import React from 'react';
import {getCityInfo,getThreeDay,getNewsList} from './api'

export default function index() {
  getData = () => {
    const coords={
        longitude:122.222,
        latitude:39.222,
    };
    getCityInfo(coords).then(res=>{
        console.log(res);
        Alert.alert('成功','请求成功')
    }).catch(err=>{
        Alert.alert('报错',JSON.stringify(err))
    })
    
    // let key = 'ceee649db5264ec09ee954f2235e7b8f';
    // let location = '112.222,39.222';
    // const url = `https://geoapi.qweather.com/v2/city/lookup?location=${location}&key=${key}`

    // fetch(url,{method:'Get'}).then(res=>res.json()).then((res)=>{
    //     console.log(res)
    //     Alert.alert('成功','請求成功')
    // }).catch((err)=>{
    //     Alert.alert('報錯',JSON.stringify(err))
    // })

  };

  return (
    <View style={[styles.container]}>
      <Button title="获取数据" onPress={this.getData} />
      <Text style={[styles.text]}>index</Text>
    </View>
  );
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
