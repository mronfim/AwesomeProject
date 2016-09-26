import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

import CommonStyles from '../styles/commonStyles';
import Post from '../components/Post';
import Header from '../components/Header';

const window = Dimensions.get('window');

export default class PostPage extends Component {
  onPressSettings() {
    this.props.nav.push({name: 'settings'});
  }

  render() {
    return (
      <View style={[CommonStyles.page, styles.page]}>
        <Header nav={this.props.nav}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },
});
