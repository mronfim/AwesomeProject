import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Post from './components/Post'
import Header from './components/Header'

const window = Dimensions.get('window');

export default class HomePage extends Component {

  onPressSettings() {
    this.props.nav.push({name: 'settings'});
  }

  onPressProfile() {
    this.props.nav.push({name: 'profile'});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header nav={this.props.nav} />
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>

          <ScrollView style={{width: window.width}}>
            <Post title='Post 1' nav={this.props.nav}/>
            <Post title='Post 2' nav={this.props.nav}/>
            <Post title='Post 3' nav={this.props.nav}/>
          </ScrollView>

          <ScrollView style={{width: window.width}}>
            <View style={{height: 300, backgroundColor: '#DCC4E2'}}></View>
            <View style={{height: 300, backgroundColor: '#ACA0AF'}}></View>
            <View style={{height: 300, backgroundColor: '#E3A6F2'}}></View>
            <View style={{height: 300, backgroundColor: '#A983B3'}}></View>
            <View style={{height: 300, backgroundColor: '#7A6B7E'}}></View>
            <View style={{height: 300, backgroundColor: '#BA6ECD'}}></View>
          </ScrollView>

        </ScrollView>
        <View style={{height:60, backgroundColor: '#F0F0F0', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {this.onPressProfile()}}>
            <Icon name="user" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
