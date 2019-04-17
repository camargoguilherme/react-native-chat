import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, Text, Dimensions,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../objects/Input';
import Button from '../objects/Button';
import styles from '../styles';

class Login extends Component<> {
  constructor(props){
    super(props);
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Input placeholder="User" onChangeText={(value) =>{}} />
        <Input placeholder="Password" secureTextEntry={true} onChangeText={(value) =>{}} />
        <Button style={styles.button} title="Login"  onPress={() =>{navigate("Users")}} />
        <View style={styles.buttonContainer}>
          <Button title="Signup" textStyle={ styles.text } onPress={() =>{navigate("SignUp")}} />
          <Button title="Forgot password" textStyle={ styles.text } onPress={() =>{ navigate("Forgot") }} />
        </View>
      </View>
    );
  }
}

export default Login;

