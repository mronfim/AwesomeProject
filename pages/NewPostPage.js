import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

export default class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.shouldRenderBackButton = props.nav.getCurrentRoutes().length > 1;
  }

  renderHeader() {
    return (
      <View style={[styles.header]}>
        <View style={{flex: .1, alignItems: 'center'}}>
          { this.shouldRenderBackButton &&
            <TouchableOpacity
              onPress={() => {this.props.nav.pop()}}>
              <Icon name="chevron-left" size={20} color="white" />
            </TouchableOpacity> }
        </View>
        <View style={{flex: .7, alignItems: 'center'}}>
          {/*<Text style={{color: 'white'}}>Profile</Text>*/}
        </View>
        <View style={{flex: .2, alignItems: 'flex-end', paddingRight: 10}}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'white'}}>POST</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={styles.body}>

        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
});
