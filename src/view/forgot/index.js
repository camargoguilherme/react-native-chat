/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import Input from '../objects/Input';
import Button from '../objects/Button';
import styles from '../styles';

class Forgot extends Component<> {
  constructor(props){
    super(props);
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Input placeholder="User" onChangeText={(value) =>{}} />
        <Input placeholder="New Password" secureTextEntry={true} onChangeText={(value) =>{}} />
        <Input placeholder="Confirm new Password" secureTextEntry={true} onChangeText={(value) =>{}} />
        
        <Button style={styles.button} title="Reset Password"  onPress={() =>{navigate("Login")}} />
        <View style={styles.buttonContainer}>
          <Button title="Login" textStyle={ styles.text } onPress={() =>{navigate("Login")}} />
        </View>
      </View>
    );
  }
}

export default Forgot;
