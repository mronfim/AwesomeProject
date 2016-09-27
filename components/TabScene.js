import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import TabBar from './TabBar'
import Header from './Header'

export default class TabScene extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  onPressTab(index) {
    this.setState({activeTab: index})
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

  render() {
    return (
      <View style={styles.container}>
        {this.renderScene(this.state.activeTab)}
        <TabBar
          {...this.props}
          onPressTab={(index) => this.onPressTab(index)}>

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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  }
});
