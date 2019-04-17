/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, AsyncStorage } from 'react-native';
import Input from '../objects/Input';
import Button from '../objects/Button';
import styles from './styles';
import { UPDATE } from '../../services/api'

class Forgot extends Component<> {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  async update(){
    const { email, password, confirmPassword } = this.state;
    if(!(email.length < 4 || email == '') && !(password.length < 1 || password == '' || password !== confirmPassword)){
      const response =  await UPDATE(email, password)
      if(response.data.auth){
        AsyncStorage.setItem('me', JSON.stringify(response.data))
        return true
      }
      alert(JSON.stringify(response.data))
    }
    return false
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Input placeholder="Email" onChangeText={(email) =>this.setState({email})} />
        <Input placeholder="New Password" secureTextEntry={true} onChangeText={(password) =>this.setState({password})} />
        <Input placeholder="Confirm new Password" secureTextEntry={true} onChangeText={(confirmPassword) =>this.setState({confirmPassword})} />
        
        <Button style={styles.button} title="Reset Password"  onPress={async () =>{ await this.update() && navigate("Login")}} />
        <View style={styles.buttonContainer}>
          <Button title="Login" textStyle={ styles.text } onPress={() =>{navigate("Login")}} />
        </View>
      </View>
    );
  }
}

export default Forgot;
