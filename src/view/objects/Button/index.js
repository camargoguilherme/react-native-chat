import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import styles from './styles';

class Button extends Component {
  constructor(props){
    super(props);
    this.props.onPress = this.props.onPress.bind(this);
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress = { ()=> this.props.onPress() }>
        <View style = {[styles.button, this.props.style]}>
          <Text style={[styles.text, this.props.textStyle ]}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>        
    );
  }
}

export default Button;