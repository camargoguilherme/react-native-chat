/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import Route from './src/view/route';

export default class App extends Component<> {
  state = {
    signed: false
  };

  async componentDidMount() {
    const user = JSON.parse(await AsyncStorage.getItem('me', null));
    if(user){
      this.setState({ signed: true })
    }
  }

  render() {
    const { signLoaded, signed } = this.state;

    const Layout = Route(signed);
    return (
      <View style={styles.container}>
        <Layout/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
