import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../objects/Input';
import Button from '../objects/Button';
import styles from './styles';
import { LOGIN } from '../../services/api';

class Login extends Component<> {
  constructor(props){
    super(props);
    this.state = {
      username: 'camargoguilherme',
      passowrd: '12345'
    }
  }
  

  async login(){
    const { username, password } = this.state;

    const response =  await LOGIN(username, password);
    if(response.auth){
      await AsyncStorage.setItem('me', JSON.stringify(response))
    }else{
      alert(JSON.stringify(response))
    }
    return response.auth
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Input placeholder="User" onChangeText={(username) =>this.setState({username})} />
        <Input placeholder="Password" secureTextEntry={true} onChangeText={(password) =>this.setState({password})} />
        <Button style={styles.button} title="Login"  onPress={async () =>{ await this.login() && navigate("Users")}} />
        <View style={styles.buttonContainer}>
          <Button title="Signup" textStyle={ styles.text } onPress={() =>{navigate("SignUp")}} />
          <Button title="Forgot password" textStyle={ styles.text } onPress={() =>{ navigate("Forgot") }} />
        </View>
      </View>
    );
  }
}

export default Login;

