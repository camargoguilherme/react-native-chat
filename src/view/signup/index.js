import React, {Component} from 'react';
import { View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../objects/Input';
import Button from '../objects/Button';
import styles from './styles';
import { SIGNUP } from '../../services/api'

class SignUp extends Component<> {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
  }
  async signup(){
    const { username, password, confirmPassword } = this.state;
    if(!(username.length < 4 || username == '') && !(password.length < 1 || password == '' || password !== confirmPassword)){
      let response = await SIGNUP(username, password)
      if(response.auth){
        AsyncStorage.setItem('me', JSON.stringify(response))
        return true
      }
      alert(JSON.stringify(response))
    }
    return false
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Input placeholder="Username" onChangeText={(username) =>this.setState({ username })} />
        <Input placeholder="Password" secureTextEntry={true} onChangeText={(password) =>this.setState({ password })} />
        <Input placeholder="Confirm Password" secureTextEntry={true} onChangeText={(confirmPassword) =>this.setState({confirmPassword})} />
        
        <Button style={styles.button} title="SignUp"  onPress={async () =>{ await this.signup() && navigate("Users")}} />
        <View style={styles.buttonContainer}>
          <Button title="Login" textStyle={ styles.text } onPress={() =>{navigate("Login")}} />
        </View>
      </View>
    );
  }
}

export default SignUp;
