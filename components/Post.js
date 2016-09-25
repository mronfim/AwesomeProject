import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Post extends Component {
  onPostPress() {
    this.props.nav.push({name: 'post'});
  }

  render() {
    return (
      <View style={{flex: 1, height: 200, borderBottomWidth: 1, borderColor: '#E4E4E4', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.onPostPress()}>
          <Text style={{fontSize: 30, color: '#6BBEED'}}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
