import React, {Component} from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

class Input extends Component {
  constructor(props){
    super(props);
    this.props.onChangeText = this.props.onChangeText.bind(this);
  }
  render() {
      return (
        <TextInput style = {[ styles.input, this.props.style]}
          underlineColorAndroid = {this.props.underlineColorAndroid /*"transparent"*/}
          placeholder = {this.props.placeholder}
          placeholderTextColor = {this.props.placeholderTextColor /*"#9a73ef"*/ }
          autoCapitalize = {this.props.autoCapitalize /*"none"*/}
          // Making the Text Input Text Hidden.
          secureTextEntry={this.props.secureTextEntry}
          onChangeText = {(value)=> this.props.onChangeText(value) }/>
      );
  }
}


export default Input;