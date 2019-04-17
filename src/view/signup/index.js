import React, {Component} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../objects/Input';
import Button from '../objects/Button';
import styles from '../styles';

class SignUp extends Component<> {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  signup(){
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    socket.emit('signup', user);
    socket.on('signup', user => alert(JSON.stringify(user)));
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Input placeholder="Username" onChangeText={(value) =>{this.setState({username: value })}} />
        <Input placeholder="Password" secureTextEntry={true} onChangeText={(value) =>{this.setState({password: value})}} />
        <Input placeholder="Confirm Password" secureTextEntry={true} onChangeText={(value) =>{}} />
        
        <Button style={styles.button} title="SignUp"  onPress={() =>{this.signup()/*navigate("Users")*/}} />
        <View style={styles.buttonContainer}>
          <Button title="Login" textStyle={ styles.text } onPress={() =>{navigate("Login")}} />
        </View>
      </View>
    );
  }
}

export default SignUp;
