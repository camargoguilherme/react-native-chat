import React, {Component} from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles';

const ButtonUser = (user, navigate) =>{
  return(
    <TouchableOpacity key={user.username} onPress={ () =>{navigate("Chat", {user})}}>
      <View style={styles.containerUser}>
        <View style={styles.circle}>
          <Text>{ user.name.split(' ')[0][0] + user.name.split(' ')[1][0] }</Text>
        </View>
        <View style={styles.infoUser}>
          <Text>{ user.name }</Text>
        </View>
        <View style={styles.messages}>
          <Text style={ { fontSize: +10 } }>{ user.messages > 0 && user.messages }</Text>
        </View>
        <View style={[styles.status, {backgroundColor: user.online?'green':'red'}]}/>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonUser;