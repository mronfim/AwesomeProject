import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image, Text, ScrollView, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  changedTab(index) {
    let oldIndex = this.state.activeTab;
    this.refs['tabsContainer' + index].setState({ color: 'blue' });
    this.refs['tabsContainer' + oldIndex].setState({ color: '#747474' });
    this.setState({activeTab: index});
  }

  componentDidMount() {
    let index = this.state.activeTab;
    this.refs['tabsContainer' + index].setState({ color: 'blue' });
  }

  render() {
    let tabs = this.props.children || [];
    return (
      <View style={[styles.bar, this.props.style]}>
        { tabs.map((tab, index) =>
            <Tab
              ref={'tabsContainer' + index}
              key={index}
              index={index}
              onChangeTab={(index) => this.changedTab(index)}
              name={tab.props.name}
              {...this.props}>
            </Tab>
        ) }
      </View>
    )
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = { color: '#747474' };
  }

  onPressTab() {
    this.props.onPressTab(this.props.index);
    this.props.onChangeTab(this.props.index);
  }

  activateTab() {
    this.setState({ color: 'blue' });
  }

  disactivateTab() {
    this.setState({ color: '#747474' });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.onPressTab()}>
          <Icon name={this.props.name} size={20} color={this.state.color}/>
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
