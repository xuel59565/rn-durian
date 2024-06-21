import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
import React, { Component } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class index extends Component {

  componentDidMount = () => {
    Geolocation.getCurrentPosition(
      info => {
        console.log('获取地理位置',info);
        // 获取地理位置成功后将其保存下来
        AsyncStorage.setItem('coords', JSON.stringify(info.coords));
      },
      error => Alert.alert('获取地理位置报错', JSON.stringify(error)),
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  }

  render() {
    return (
    <View>
      <ScrollView>
        <View style={[styles.container]}>
          <TouchableOpacity onPress={() => Alert.alert('扫一扫')}>
            <View style={[styles.itemBase]}>
              <Ionicons
                name="scan-outline"
                size={40}
                color={'#e9dfb8'}></Ionicons>
              <Text style={[styles.fontBase]}>扫一扫</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.itemBase]}>
              <Ionicons
                name="qr-code-outline"
                size={40}
                color={'#e9dfb8'}></Ionicons>
              <Text style={[styles.fontBase]}>付款码</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.itemBase]}>
              <Ionicons
                name="trail-sign-outline"
                size={40}
                color={'#e9dfb8'}></Ionicons>
              <Text style={[styles.fontBase]}>出行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.itemBase]}>
              <Ionicons
                name="card-outline"
                size={40}
                color={'#e9dfb8'}></Ionicons>
              <Text style={[styles.fontBase]}>卡包</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Swiper
          autoplay={true}
          style={[styles.wrapper]}
          dot={<View style={[styles.dot]} />}
          activeDot={<View style={[styles.activeDot]} />}>
          <Image
            style={[styles.slideImage]}
            source={require('../../images/1.png')}
          />
          <Image
            style={[styles.slideImage]}
            source={require('../../images/2.png')}
          />
          <Image
            style={[styles.slideImage]}
            source={require('../../images/3.png')}
          />
        </Swiper>
      </ScrollView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemBase: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#697767',
    height: 90,
    width: Dimensions.get('window').width / 4,
  },
  fontBase: {
    color: '#e9dfb8',
    fontSize: 14,
    paddingTop: 4,
  },
  wrapper: {
    height: 200,
  },
  slideImage: {
    height: 200,
    width: Dimensions.get('window').width,
  },
  dot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 1,
  },
  activeDot: {
    backgroundColor: '#e9dfb8',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 1,
  },
});
