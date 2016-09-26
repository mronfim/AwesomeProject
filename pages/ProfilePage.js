import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

import CommonStyles from '../styles/commonStyles';
import Header from '../components/Header';
import TabBar from '../components/TabBar';

export default class ProfilePage extends Component {
  onPressSettings() {
    this.props.nav.push({name: 'settings'});
  }

  render() {
    var _horizScrollView;
    return (
      <View style={[CommonStyles.page, styles.page]}>
        <Header nav={this.props.nav} />
        <ScrollView stickyHeaderIndices={[1]} style={{flex: 1}}>
          <View style={styles.profileHeader}>
            <View style={styles.profilePicContainer}>
              <Image
                source={{uri: "https://facebook.github.io/react/img/logo_og.png"}}
                style={styles.profilePic}
              />
            </View>
          </View>
          <TabBar
            style={styles.tabBar}
            onPressTab={(index) => {
              _horizScrollView.scrollTo({x: index * window.width});
            }}>
            <Icon name='newspaper-o' size={20} color='#747474'/>
            <Icon name='user' size={20} color='#747474'/>
            <Icon name='envelope' size={20} color='#747474'/>
            <Icon name='bell' size={20} color='#747474'/>
          </TabBar>
          <ScrollView
            ref={(scrollView) => {_horizScrollView = scrollView}}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            style={{flex: 1}}>

            <View style={{width: window.width}}>
              <View style={{height: 300, backgroundColor: '#D9D8D7'}}></View>
              <View style={{height: 300, backgroundColor: '#ADAF97'}}></View>
              <View style={{height: 300, backgroundColor: '#BBD79F'}}></View>
            </View>

            <View style={{width: window.width}}>
              <View style={{height: 300, backgroundColor: '#DCC4E2'}}></View>
              <View style={{height: 300, backgroundColor: '#ACA0AF'}}></View>
              <View style={{height: 300, backgroundColor: '#E3A6F2'}}></View>
            </View>

            <View style={{width: window.width}}>
              <View style={{height: 300, backgroundColor: '#D9D8D7'}}></View>
              <View style={{height: 300, backgroundColor: '#ADAF97'}}></View>
              <View style={{height: 300, backgroundColor: '#BBD79F'}}></View>
            </View>

            <View style={{width: window.width}}>
              <View style={{height: 300, backgroundColor: '#DCC4E2'}}></View>
              <View style={{height: 300, backgroundColor: '#ACA0AF'}}></View>
              <View style={{height: 300, backgroundColor: '#E3A6F2'}}></View>
            </View>

          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const window = Dimensions.get('window');

var styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },
  profileHeader: {
    backgroundColor: 'white',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicContainer: {
    borderWidth: 10,
    borderColor: '#1AE063',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  profilePic: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  tabBar: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#ACACAC',
  }
});
