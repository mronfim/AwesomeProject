import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, Navigator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

import CommonStyles from '../styles/commonStyles';

export default class SettingsPage extends Component {
  _renderScene(route, nav) {
    switch (route.depth) {
      case 0:
        return <Level0 nav={nav}/>
      case 1:
        return <Level1 nav={nav}/>
    }
  }

  render() {
    return (
      <View style={[CommonStyles.page, styles.page]}>
        <View style={[CommonStyles.pageHeader, styles.header]}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {this.props.nav.pop()}}>
              <Icon name="chevron-left" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 20, alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Settings</Text>
          </View>
          <View style={{flex: 1}}>
          </View>
        </View>
        <Navigator
          initialRoute={{depth: 0}}
          renderScene={(route, navigator) => {return this._renderScene(route, navigator)}}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },
  level0: {
    height: 50,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#67F0CB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});



class Level0 extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => {this.props.nav.push({depth: 1})}}>
        <View style={styles.level0}>
          <Text style={{color: '#0B4524', fontSize: 15}}>Some Option</Text>
          <Icon name="arrow-right" size={20} color="#3AAC8D" />
        </View>
      </TouchableOpacity>
    )
  }
}

class Level1 extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {this.props.nav.pop()}}>
          <View style={[styles.level0, {justifyContent: 'flex-start'}]}>
            <Icon name="arrow-left" size={20} color="#3AAC8D"/>
            <Text style={{color: '#0B4524', fontSize: 15, marginLeft: 15}}>Go Back</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.level0, {justifyContent: 'center'}]}>
          <Text style={{color: '#0B4524', fontSize: 15, marginRight: 10}}>Log Out</Text>
          <Icon name="sign-out" size={20} color="#3AAC8D"/>
        </View>
      </View>
    )
  }
}
