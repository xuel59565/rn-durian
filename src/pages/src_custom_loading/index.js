/*
 * @Author: Lily 103798802+xuel59565@users.noreply.github.com
 * @Date: 2024-06-06 11:02:38
 * @LastEditors: Lily 103798802+xuel59565@users.noreply.github.com
 * @LastEditTime: 2024-06-06 11:16:57
 * @FilePath: /RNTest1/src/pages/src_custom/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View  style={[styles.loading]}>
        <ActivityIndicator color={'#ccd'}></ActivityIndicator>
        <Text style={[styles.loadingTitle]}> 加載中... </Text>
        </View>

    
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    loading:{
        backgroundColor:'#999',
        height:100,
        width:150,
        borderRadius:20,
        padding:20
    },
    loadingTitle:{
        textAlign:'center',
        color:'white',
        marginTop:20
    }
})
