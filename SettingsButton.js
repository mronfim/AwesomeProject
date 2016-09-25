import React, { Component, PropTypes } from 'react';
import { View, Navigator, TouchableHighlight, Image, Text } from 'react-native';

export default class Settings extends Component {
  /*static propTypes() {
    return {
      title: propTypes.string.isRequired,
      onBack: propTypes.func.isRequired,
    };
  }*/

  renderScene(route, nav) {
    switch (route.title) {
      case "Settings Button":
        return <SettingsButton navigator={nav}/>
      case "Settings Page":
        return <SettingsPage navigator={nav}/>
      default:
        return <Text>No Route</Text>
    }
  }

  render() {
    const routes = [
      {title: 'Settings Button'},
      {title: 'Settings Page'},
    ];
    return (
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) =>
            {return this.renderScene(route, navigator)}
          }
        />
    );
  }
}



class SettingsButton extends Component {
  render() {
    let pic = { uri: 'https://image.freepik.com/free-icon/settings-gear-for-interface-button_318-32785.jpg' };
    return (
      <TouchableHighlight onPress={() => {this.props.navigator.push({title: 'Settings Page'})}}>
        <Image source={pic} style={{width: 25, height: 25}} />
      </TouchableHighlight>
    );
  }
}


class SettingsPage extends Component {
  render() {
    let pic = { uri: 'https://image.freepik.com/free-icon/settings-gear-for-interface-button_318-32785.jpg' };
    return (
      <TouchableHighlight onPress={() => {this.props.navigator.pop()}}>
        <Text>Settings Page</Text>
      </TouchableHighlight>
    );
  }
}
