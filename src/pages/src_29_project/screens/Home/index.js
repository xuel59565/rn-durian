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
import React, {Component} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getCityInfo, getThreeDays, getIndices} from '../../utils/api';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import weatherIcons from '../../utils/weatherIcons';


export default class Index extends Component {
  //构造函数
  constructor(){
    super();
    this.state={
      city:{},
      indeces:[],
      threeDays:[],
    }
  }

  async componentDidMount  () {
    Geolocation.getCurrentPosition(
      info => {
        console.log('获取地理位置', info);
        // 获取地理位置成功后将其保存下来
        AsyncStorage.setItem('coords', JSON.stringify(info.coords));

        // 通过解构对象直接提取经纬度
        const {latitude, longitude} = info.coords;
        const coords = {
          latitude,
          longitude,
        };
        // 获取位置成功后，调用天气接口
        this.fetchWeatherData(coords);
      },
      error => {
        Alert.alert('获取地理位置报错', JSON.stringify(error));
        const coords = {
          longitude: 112.333,
          latitude: 39.444,
        };
        // 获取位置失败后，也调用天气接口
        this.fetchWeatherData(coords);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  };

  fetchWeatherData = coords => {
    // 获取城市信息
    getCityInfo(coords).then(res => {
      console.log(res);
      this.setState({
        city: res,
      });
    });  
   
    // 获取生活指数
    getIndices(coords).then(res => {
      console.log('生活指数',res);
      this.setState({
        indeces: res,
      });
    });

    // 获取未来3天的天气预报
    getThreeDays(coords).then(res => {
      console.log(res);
      this.setState({
        threeDays: res,
      });
    });

  //   //假裝獲取了。
  //   this.setState({
  //     city: {"adm1": "加利福尼亚", "adm2": "旧金山", "country": "美国", "fxLink": "https://www.qweather.com/weather/san-francisco-93AC7.html", "id": "93AC7", "isDst": "1", "lat": "37.77500", "lon": "-122.41900", "name": "旧金山", "rank": "35", "type": "city", "tz": "America/Los_Angeles", "utcOffset": "-07:00"}
  //  , indeces: [{"category": "较适宜", "date": "2024-06-21", "level": "2", "name": "运动指数", "type": "1"}, {"category": "较适宜", "date": "2024-06-21", "level": "2", "name": "洗车指数", "type": "2"}, {"category": "炎热", "date": "2024-06-21", "level": "7", "name": "穿衣指数", "type": "3"}, {"category": "较适宜", "date": "2024-06-21", "level": "2", "name": "钓鱼指数", "type": "4"}, {"category": "很强", "date": "2024-06-21", "level": "5", "name": "紫外线指数", "type": "5"}]
  // , threeDays:[{"cloud": "1", "fxDate": "2024-06-21", "humidity": "64", "iconDay": "102", "iconNight": "150", "moonPhase": "满月", "moonPhaseIcon": "804", "moonrise": "20:52", "moonset": "05:01", "precip": "0.0", "pressure": "1003", "sunrise": "05:49", "sunset": "20:36", "tempMax": "18", "tempMin": "12", "textDay": "少云", "textNight": "晴", "uvIndex": "11", "vis": "13", "wind360Day": "242", "wind360Night": "236", "windDirDay": "西南偏西风", "windDirNight": "西南风", "windScaleDay": "3-4", "windScaleNight": "3-4", "windSpeedDay": "17", "windSpeedNight": "13"}, {"cloud": "0", "fxDate": "2024-06-22", "humidity": "58", "iconDay": "100", "iconNight": "150", "moonPhase": "亏凸月", "moonPhaseIcon": "805", "moonrise": "21:48", "moonset": "05:59", "precip": "0.0", "pressure": "1003", "sunrise": "05:49", "sunset": "20:36", "tempMax": "21", "tempMin": "13", "textDay": "晴", "textNight": "晴", "uvIndex": "11", "vis": "14", "wind360Day": "238", "wind360Night": "222", "windDirDay": "西南偏西风", "windDirNight": "西南风", "windScaleDay": "3-4", "windScaleNight": "3-4", "windSpeedDay": "17", "windSpeedNight": "17"}, {"cloud": "4", "fxDate": "2024-06-23", "humidity": "74", "iconDay": "100", "iconNight": "150", "moonPhase": "亏凸月", "moonPhaseIcon": "805", "moonrise": "22:35", "moonset": "07:06", "precip": "0.0", "pressure": "1006", "sunrise": "05:49", "sunset": "20:36", "tempMax": "18", "tempMin": "13", "textDay": "晴", "textNight": "晴", "uvIndex": "11", "vis": "14", "wind360Day": "242", "wind360Night": "223", "windDirDay": "西南偏西风", "windDirNight": "西南风", "windScaleDay": "4-5", "windScaleNight": "3-4", "windSpeedDay": "28", "windSpeedNight": "22"}]
  //   });
  };


   

  indecesItem = ({index, item}) => {
    return (
      <TouchableOpacity
        key={'index' + item.type}
        onPress={() => {
          Alert.alert(item.type);
        }}>
        <View style={[styles.indexItem]}>
          <Text style={[styles.indexName]}>{item.name}</Text>
          <Text style={[styles.indexBase]}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };

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
          <View style={[styles.city]}>
            <Text style={[styles.cityText]}>
              {this.state.city.country} 
              {this.state.city.adm1}
              {this.state.city.adm2}
            </Text>
          </View>
          <View style={[styles.indexContainer]}>
            <FlatList
              data={this.state.indeces}
              renderItem={this.indecesItem}
              keyExtractor={item=>item.type}
              horizontal={true}
            />
          </View>
          <View style={[styles.dailyContainer]}>
            {this.state.threeDays.map((item, index) => {
              return (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ddd', '#374442']}
                  key={'weather' + index}
                  style={[styles.dailyItem]}>
                  <Text style={[styles.dailyItemTitle]}>{item.fxDate}</Text>
                  <View style={[styles.dailyItemContent]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Image
                        style={[styles.weatherIcon]}
                        source={weatherIcons[item.iconDay]}
                      />
                      <Text>
                        {item.textDay} {item.tempMax}°
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text>
                        {item.tempMin}° {item.textNight}
                      </Text>
                      <Image
                        style={[styles.weatherIcon]}
                        source={weatherIcons[item.iconNight]}
                      />
                    </View>
                  </View>
                </LinearGradient>
              );
            })}
          </View>
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
  city: {
    flex: 1,
    justifyContent: 'center',
  },
  cityText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  indexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  indexItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#f9efcd',
    width: Dimensions.get('window').width / 3 - 10,
    height: 80,
    marginTop: 10,
    marginRight: 10,
  },
  indexName: {
    color: '#6e6441',
    fontSize: 14,
  },
  indexBase: {
    color: '#6d7766',
    fontSize: 15,
  },
  dailyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  dailyItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    width: Dimensions.get('window').width - 20,
    marginTop: 10,
  },
  dailyItemTitle: {
    fontSize: 20,
    color: '#eee',
    marginTop: 10,
  },
  dailyItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 40,
    alignItems: 'center',
    marginBottom: 10,
  },
  weatherIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
});
