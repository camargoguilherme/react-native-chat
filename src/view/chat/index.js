/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Alert } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import socket from '../../services/socket';

class Chat extends Component<> {
  constructor(props){
    super(props);

    this.state = {
      messages: [],
    }
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    let user = params?params.user:null;
    this.setState({user})
    
    socket.on("chat", ( client, messages) =>{
      if(client.name === user.name){
        this.setState({
          ...messages
        })
      }
    });
    
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    socket.emit("send", messages);
  }
  
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages =>{ this.onSend(messages)}}
        user={{
          _id: 1
        }}
      />
    )
  }
}

export default Chat;
