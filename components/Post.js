import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Post extends Component {
  onPostPress() {
    this.props.nav.push({name: 'post'});
  }

  onPressProfile() {
    this.props.nav.push({name: 'profile'});
  }

  render() {
    return (
      <View>
        <View style={{flex:1, flexDirection: 'row', padding: 10, paddingBottom: 0}}>
          <TouchableOpacity onPress={() => this.onPressProfile()}>
            <Icon name="md-contact" size={50} color="#6BBEED" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, height: 150, borderBottomWidth: 1, borderColor: '#E4E4E4', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.onPostPress()}>
            <Text style={{fontSize: 30, color: '#6BBEED'}}>{this.props.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
