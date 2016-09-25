import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

import CommonStyles from '../styles/commonStyles';
import Post from '../components/Post'

const window = Dimensions.get('window');

export default class PostPage extends Component {
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
            <Text style={{color: 'white'}}>Post</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            {/*}<TouchableOpacity onPress={() => {this.onPressSettings()}}>
              <Icon name="cog" size={20} color="white" />
            </TouchableOpacity>*/}
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },
});
