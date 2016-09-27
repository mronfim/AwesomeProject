import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import CommonStyles from '../styles/commonStyles';
import Header from '../components/Header';
import TabBar from '../components/TabBar';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

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
            barStyle={styles.tabBar}
            iconColor='#a2a2a2'
            activeIconColor='orange'
            onPressTab={(index) => {
              _horizScrollView.scrollTo({x: index * window.width});
            }}>
            <Icon name='md-paper' label='newsfeed' size={20}/>
            <Icon name='md-contact' label='profile' size={20}/>
            <Icon name='md-chatboxes' label='messages' size={20}/>
            <Icon name='md-notifications' label='notifications' size={20}/>
          </TabBar>
          <ScrollView
            ref={(scrollView) => {_horizScrollView = scrollView}}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            style={{flex: 1}}>

            <View style={{width: window.width}}>
              <View style={{height: 300, backgroundColor: '#D9D8D7'}}>
                <ColorAnimated/>
              </View>
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
    borderTopWidth: 0.0,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1
  },
  box: {
    position: 'absolute',
    top: 100,
    left: 100,
    width: 100,
    height: 100
  }
});


class ColorAnimated extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.forward = true;
  }

  onPressed() {
    if (this.forward) {
      Animated.timing(this.animatedValue, {
        toValue: 100,
        duration: 1000
      }).start();
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 1000
      }).start();
    }
    this.forward = !this.forward;
  }

  render() {
    let interpolatedColorAnimation = this.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 1)']
    });
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.onPressed()}>
        <Animated.View
          style={[styles.box, {backgroundColor: interpolatedColorAnimation}]}
        />
      </TouchableOpacity>
    );
  }
}
