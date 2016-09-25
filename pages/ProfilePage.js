import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

import CommonStyles from '../styles/commonStyles';

export default class ProfilePage extends Component {
  onPressSettings() {
    this.props.nav.push({name: 'settings'});
  }
  render() {
    return (
      <View style={[CommonStyles.page, styles.page]}>
        <View style={[CommonStyles.pageHeader]}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {this.props.nav.pop()}}>
              <Icon name="chevron-left" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 20, alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Profile</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {this.onPressSettings()}}>
              <Icon name="cog" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView stickyHeaderIndices={[1]}>
          <View
            style={{
              'backgroundColor': 'white',
              'height': 400,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderWidth: 10,
                borderColor: '#1AE063',
                width: 200,
                height: 200,
                borderRadius: 100,
              }}>
              <Image
                source={{uri: "https://facebook.github.io/react/img/logo_og.png"}}
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: 90
                }}
              />
            </View>
          </View>
          <View
            style={{
              'backgroundColor': 'white',
              'height': 50,
              borderBottomWidth: 0.5,
              borderTopWidth: 0.5,
              borderColor: '#ACACAC',
            }}>
          </View>
          <View style={{height: 300, backgroundColor: '#D9D8D7'}}></View>
          <View style={{height: 300, backgroundColor: '#ADAF97'}}></View>
          <View style={{height: 300, backgroundColor: '#BBD79F'}}></View>
          <View style={{height: 300, backgroundColor: '#D9D8D7'}}></View>
          <View style={{height: 300, backgroundColor: '#ADAF97'}}></View>
          <View style={{height: 300, backgroundColor: '#BBD79F'}}></View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },
});
