/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text, Navigator } from 'react-native';

import HomePage from './HomePage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';

import Header from './components/Header'

class AwesomeProject extends Component {
  render() {
    let routes = {
      home: {
        name: 'home',
        component: (nav) => <HomePage nav={nav} />
      },
      profile: {
        name: 'profile',
        component: (nav) => <ProfilePage nav={nav} />
      },
      settings: {
        name: 'settings',
        component: (nav) => <SettingsPage nav={nav} />
      },
      post: {
        name: 'post',
        component: (nav) => <PostPage nav={nav} />
      },
    }
    return <Router routes={routes} initialRoute={routes.home} />
  }
}


class Router extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    return route.component(navigator);
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={(route, navigator) => {
          let routes = this.props.routes;
          let nextRoute = routes[route.name]
          return this.renderScene(nextRoute, navigator)
        }}
      />
    )
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
