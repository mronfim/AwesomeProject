import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Post from './components/Post'
import Header from './components/Header'
import TabBar from './components/TabBar'

const window = Dimensions.get('window');

export default class HomePage extends Component {

  onPressSettings() {
    this.props.nav.push({name: 'settings'});
  }

  render() {
    var _horizScrollView;
    var scrollViews = [];
    var currentIndex = 0;
    return (
      <View style={{flex: 1}}>
        <Header nav={this.props.nav} />
        <TabBar
          iconColor='#a2a2a2'
          activeIconColor='orange'
          onPressTab={(index) => {
            _horizScrollView.scrollTo({x: index * window.width});
            if (index == currentIndex) {
              scrollViews[index].scrollTo({y: 0})
            }
            currentIndex = index;
          }}>
          <Icon name="md-document" size={30} label='All'/>
          <Icon name="md-document" size={30} label='Barks'/>
          <Icon name="md-document" size={30} label='Places'/>
          <Icon name="md-document" size={30} label='Products'/>
          <Icon name="md-document" size={30} label='Services'/>
        </TabBar>
        <ScrollView
          ref={(scrollView) => {_horizScrollView = scrollView}}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>

          <ScrollView
            style={{width: window.width}}
            ref={(scrollView) => scrollViews.push(scrollView)}>
            <Post title='Post 1' nav={this.props.nav}/>
            <Post title='Post 2' nav={this.props.nav}/>
            <Post title='Post 3' nav={this.props.nav}/>
            <Post title='Post 4' nav={this.props.nav}/>
          </ScrollView>

          <ScrollView
            style={{width: window.width}}
            ref={(scrollView) => scrollViews.push(scrollView)}>
            <Post title='Post 1' nav={this.props.nav}/>
            <Post title='Post 2' nav={this.props.nav}/>
            <Post title='Post 3' nav={this.props.nav}/>
          </ScrollView>

          <ScrollView
            style={{width: window.width}}
            ref={(scrollView) => scrollViews.push(scrollView)}>
            <Post title='Post 1' nav={this.props.nav}/>
            <Post title='Post 2' nav={this.props.nav}/>
            <Post title='Post 3' nav={this.props.nav}/>
          </ScrollView>

          <ScrollView
            style={{width: window.width}}
            ref={(scrollView) => scrollViews.push(scrollView)}>
            <Post title='Post 1' nav={this.props.nav}/>
            <Post title='Post 2' nav={this.props.nav}/>
            <Post title='Post 3' nav={this.props.nav}/>
          </ScrollView>

          <ScrollView
            style={{width: window.width}}
            ref={(scrollView) => scrollViews.push(scrollView)}>
            <Post title='Post 1' nav={this.props.nav}/>
            <Post title='Post 2' nav={this.props.nav}/>
            <Post title='Post 3' nav={this.props.nav}/>
          </ScrollView>

        </ScrollView>
      </View>
    );
  }
}
