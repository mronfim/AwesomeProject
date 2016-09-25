/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
  static propTypes() {
    return {
      title: propTypes.string.isRequired,
      onForward: propTypes.func.isRequired,
      onBack: propTypes.func.isRequired,
    };
  }

  render() {
    return (
      <View
        style={{backgroundColor: 'white', flex: 1}}>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export class OtherScene extends Component {
  static propTypes() {
    return {
      title: propTypes.string.isRequired,
      onForward: propTypes.func.isRequired,
      onBack: propTypes.func.isRequired,
    };
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>

        <View style={{backgroundColor: 'purple', padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableHighlight onPress={this.props.onBack}>
            <Text>Back</Text>
          </TouchableHighlight>
          <Text>{ this.props.title }</Text>
          <TouchableHighlight onPress={this.props.onForward}>
            <Text>Next</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

class SettingsScene extends Component {
  static propTypes() {
    return {
      title: propTypes.string.isRequired,
      onForward: propTypes.func.isRequired,
      onBack: propTypes.func.isRequired,
    };
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>

        <View style={{backgroundColor: 'yellow', padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableHighlight onPress={this.props.onBack}>
            <Text>Back</Text>
          </TouchableHighlight>
          <Text>{ this.props.title }</Text>
        </View>

      </View>
    );
  }
}
