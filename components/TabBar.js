import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image, Text, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

export default class TabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tabs = this.props.children || [];
    return (
      <View style={[styles.bar, this.props.style]}>
        { tabs.map((tab, index) =>
            <Tab index={index} {...this.props}>
              {tab}
            </Tab>
        ) }
      </View>
    )
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  onPressTab() {
    this.props.onPressTab(this.props.index);
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.onPressTab()}>
          {this.props.children}
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  bar: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
