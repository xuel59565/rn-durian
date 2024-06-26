import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Index extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={[styles.avatar]}>
            <Image
              source={{
                uri: 'https://gd-hbimg.huaban.com/f6d79ce6d4476baf5c2831c056e330f446b97329301e8-S5R8H5_fw658webp',
              }}
              style={{
                width: 80,
                height: 80,
                marginVertical: 10,
                borderRadius: 40,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('About')}>
            <View style={[styles.listItem]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="information-circle-outline"
                  size={20}
                  color={'#2d3'}
                />
                <Text style={{marginLeft: 10, fontSize: 18}}>关于</Text>
              </View>
              <Icon name="chevron-forward-outline" size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('设置')}>
            <View style={[styles.listItem]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="settings-outline" size={20} color={'#22d'} />
                <Text style={{marginLeft: 10, fontSize: 18}}>設置</Text>
              </View>
              <Icon name="chevron-forward-outline" size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <View style={[styles.listItem]}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="settings-outline" size={20} color={'#22d'} />
                <Text style={{marginLeft: 10, fontSize: 18}}>登录</Text>
              </View>
              <Icon name="chevron-forward-outline" size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity //onPress={this.doLogout}
          >
            <View style={[styles.listItem]}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="settings-outline" size={20} color={'#22d'} />
                <Text style={{marginLeft: 10, fontSize: 18}}>退出</Text>
              </View>
              <Icon name="chevron-forward-outline" size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    justifyContent: 'flex-start',
  },
  avatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 50,
    paddingHorizontal: 20,
  },
});
