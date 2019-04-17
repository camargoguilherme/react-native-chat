import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import ButtonUser from '../objects/ButtonUser';
import styles from '../styles';

class Users extends Component<> {
  constructor(props){
    super(props);
    this.state = { 
      users: [
        {
          username: 'teste',
          name: 'Guilherme Camargo'
        }
      ]
    }
  }
  componentWillMount() {
    let user = {
      username: 'teste',
      name: 'Guilherme Camargo'
    }
    socket.emit("join", user);

    socket.on(`join`, (users) =>{
      this.setState({
        users
      })
    });
    
  }

  navigateTochat(navigate, user){
    navigate('Chat', {user})
  }
  
  render() {
    const { navigate } = this.props.navigation;
    let { users } = this.state
    return (
      <View style={styles.container}>
        <ScrollView>
        {
          users && users.map( (user) =>{
            return new ButtonUser(user, navigate)
          })
        }
        </ScrollView>
      </View>
    );
  }
}

export default Users;
