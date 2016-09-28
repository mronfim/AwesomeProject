import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import TabBar from './TabBar'
import Header from './Header'

export default class TabScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      lastActiveTab: 0,
      clickedTab: 0,
      bottomValue: new Animated.Value(-300),
      opacityValue: new Animated.Value(0),
      topValue: window.height,
    };
  }

  onPressTab(index) {
    if (index === 2 && index === this.state.clickedTab) {
      this.hideAddContent();
      this.tabBar.unpress();
    } else if (index === 2) {
      this.setState({clickedTab: index});
      this.showAddContent();
    } else {
      this.hideAddContent();
      this.setState({lastActiveTab: this.state.activeTab});
      this.setState({activeTab: index});
      this.setState({clickedTab: index});
    }
  }

  onPressPopupBackground() {
    this.hideAddContent();
    this.tabBar.unpress();
  }

  showAddContent() {
    this.setState({topValue: 0});
    Animated.spring(
      this.state.bottomValue, {
        toValue: 60,
        friction: 5,
      }
    ).start();
    Animated.timing(
      this.state.opacityValue, {
        toValue: 0.5,
        duration: 300,
      }
    ).start();
  }

  hideAddContent() {
    this.setState({clickedTab: this.state.activeTab});
    Animated.spring(
      this.state.bottomValue,
      {
        toValue: -300,
        friction: 5,
      }
    ).start();
    Animated.timing(
      this.state.opacityValue, {
        toValue: 0,
        duration: 300,
      }
    ).start(() => this.setState({topValue: window.height}));
  }

  renderTabs() {
    return React.Children.map(this.props.children, child => {
      if (child.type === TabSceneItem) {
        return <Icon
          name={child.props.name}
          size={child.props.size}
          label={child.props.label}
        />
      }
    });
  }

  renderScene(index) {
    let child = React.Children.map(this.props.children, (child, i) => {
      if (i === index) {
        return React.cloneElement(child);
      }
    })[0];
    return React.Children.map(child.props.children, c => {
      return React.cloneElement(c, {
        nav: this.props.nav,
      });
    });
  }

  renderAddContentButton(icon, size, color, bgColor, label) {
    return (
      <TouchableOpacity
        onPress={() => this.props.nav.push({name: 'new-post'})}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={[styles.newPostButton, {
            backgroundColor: bgColor,
            width: size*2,
            height: size*2,
            borderRadius: size,
          }]}>
          <Icon name={icon} size={size} color={color} />
        </View>
        <Text style={{color: bgColor}}>{label}</Text>
      </TouchableOpacity>
    );
  }

  renderAddContent() {
    return (
      <Animated.View
        style={[styles.darkBackground, {
          top: this.state.topValue
        }]}>
        <TouchableWithoutFeedback onPress={() => this.onPressPopupBackground()}>
          <Animated.View style={[styles.darkBackgroundButton, {
              opacity: this.state.opacityValue
            }]} />
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.popUp, {bottom: this.state.bottomValue}]}>
          {this.renderAddContentButton('md-paper', 32, 'white', '#35bfeb', 'New Post')}
          {this.renderAddContentButton('md-map', 32, 'white', '#55ac7d', 'New Post')}
        </Animated.View>
      </Animated.View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScene(this.state.activeTab)}
        {this.renderAddContent()}
        <TabBar
          {...this.props}
          onPressTab={(index) => this.onPressTab(index)}
          ref={(comp) => this.tabBar = comp}>

          {this.renderTabs()}

        </TabBar>
      </View>
    )
  }
}

export class TabSceneItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}

const window = Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  popUp: {
    backgroundColor: '#e9e9e9',
    height: 300,
    width: window.width,
    position: 'absolute',
    left: 0,
    opacity: 1,
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  darkBackground: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  darkBackgroundButton: {
    backgroundColor: 'black',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  newPostButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
