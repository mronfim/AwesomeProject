import React, { Component } from 'react';
import { Navigator } from 'react-native';

export default class Router extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    return React.Children.map(this.props.children, child => {
      if (route.name === child.props.route) {
        return React.cloneElement(child, {
          nav: navigator
        });
      }
    });
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={(route, navigator) => {
          return this.renderScene(route, navigator)
        }}
      />
    )
  }
}
