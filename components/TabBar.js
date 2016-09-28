import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      lastActiveTab: 0,
    };
  }

  changedTab(index) {
    if (this.state.activeTab !== index) {
      let oldIndex = this.state.activeTab;
      this.refs['tabsContainer' + oldIndex].setState({ color: this.props.iconColor });
      this.refs['tabsContainer' + index].setState({ color: this.props.activeIconColor });
      this.setState({activeTab: index});
      this.setState({lastActiveTab: oldIndex});
    }
  }

  unpress() {
    this.changedTab(this.state.lastActiveTab);
  }

  componentDidMount() {
    let index = this.state.activeTab;
    this.refs['tabsContainer' + index].setState({ color: this.props.activeIconColor });
  }

  renderTabs() {
    return React.Children.map(this.props.children, (child, index) => {
      return (
        <Tab
          ref={'tabsContainer' + index}
          key={index}
          index={index}
          onChangeTab={(index) => this.changedTab(index)}
          color={this.props.iconColor}
          {...child.props}
          {...this.props}>
        </Tab>
      )
    });
  }

  render() {
    return (
      <View style={[styles.bar, this.props.barStyle]}>
        { this.renderTabs() }
      </View>
    )
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };
  }

  onPressTab() {
    this.props.onPressTab(this.props.index);
    this.props.onChangeTab(this.props.index);
  }

  render() {
    return (
        <TouchableOpacity onPress={() => this.onPressTab()} style={styles.tab}>
          <View style={styles.tabInnerView}>
            <Icon name={this.props.name} size={this.props.size} color={this.state.color}/>
            { this.props.label && <Text style={[styles.tabLabel, {color: this.state.color}]}>{this.props.label}</Text> }
          </View>
        </TouchableOpacity>
    )
  }
}

var styles = StyleSheet.create({
  bar: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
  },
  tab: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'column',
  },
  tabInnerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '100',
  },
});
