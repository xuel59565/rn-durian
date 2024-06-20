/*
 * @Author: Lily 103798802+xuel59565@users.noreply.github.com
 * @Date: 2024-05-31 16:31:46
 * @LastEditors: Lily 103798802+xuel59565@users.noreply.github.com
 * @LastEditTime: 2024-05-31 16:33:05
 * @FilePath: /RNTest1/src/pages/src_fuc/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { StyleSheet, Text, View,Platform, Alert } from 'react-native'
import React from 'react'

export default function index() {
    if(Platform.OS==='android'){
        alert('當前是安卓')
    }else if(Platform.OS==='ios'){
        alert('當前是ios')
    }
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({})