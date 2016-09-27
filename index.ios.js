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

import Header from './components/Header'
import Router from './components/Router'

class AwesomeProject extends Component {
  render() {
    return (
      <Router initialRoute={{name: 'home'}}>
        <HomePage route='home' />
        <ProfilePage route='profile' />
        <SettingsPage route='settings' />
        <PostPage route='post' />
      </Router>
    )
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
