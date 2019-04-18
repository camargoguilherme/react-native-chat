import React, {
  Component
} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  AsyncStorage
} from 'react-native';
import ButtonUser from '../objects/ButtonUser';
import styles from './styles';
import socket from '../../services/socket';
import api from '../../services/api';

class Users extends Component < > {
  constructor(props) {
    super(props);
    this.state = {
      users: [

      ]
    }
  }
  async componentWillMount() {
    let me = JSON.parse(await AsyncStorage.getItem('me'));

    const users = await api.get({
      url: '/user',
      headers: {
        'x-access-token': me.token

      }
    })
    ale
    this.setState({
      users
    })

    socket.emit('connectRoom', me);
    socket.on('join', (user) => {
      const users = user.filter(u => u._id != me._id)
      this.setState({
        users
      })

    });

  }

  navigateTochat(navigate, user) {
    navigate('Chat', {
      user
    })
  }

  render() {
    const {
      navigate
    } = this.props.navigation;
    let {
      users
    } = this.state
    return ( <
      View style = {
        styles.container
      } >
      <
      ScrollView > {
        users && users.map((user) => {
          return new ButtonUser(user, navigate)
        })
      } <
      /ScrollView> <
      /View>
    );
  }
}

export default Users;