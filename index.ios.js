/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

import HomePage from './HomePage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';

import Router from './components/Router'
import TabScene, { TabSceneItem } from './components/TabScene'

class AwesomeProject extends Component {
  render() {
    return (
      <Router initialRoute={{name: 'home'}}>
        <TabScene
          route='home'
          iconColor='#a2a2a2'
          activeIconColor='orange'
          barStyle={{
            borderTopWidth: 0.5,
            borderColor: '#c6c6c6',
          }}>

          <TabSceneItem name="md-paper" size={30} label='Newsfeed'>
            <HomePage />
          </TabSceneItem>

          <TabSceneItem name="md-contact" size={30} label='Profile'>
            <ProfilePage />
          </TabSceneItem>

          <TabSceneItem name="md-add-circle" size={30} label='Profile'>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{fontSize: 50, fontWeight: 'bold'}}>3</Text>
            </View>
          </TabSceneItem>

          <TabSceneItem name="md-chatboxes" size={30} label='Profile'>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{fontSize: 50, fontWeight: 'bold'}}>4</Text>
            </View>
          </TabSceneItem>

          <TabSceneItem name="md-notifications" size={30} label='Profile'>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{fontSize: 50, fontWeight: 'bold'}}>5</Text>
            </View>
          </TabSceneItem>

        </TabScene>
        <SettingsPage route='settings' />
        <ProfilePage route='profile' />
        <PostPage route='post' />
      </Router>
    )
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
