/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import socket from '../../services/socket';
import { SENDMESSAGE, CREATECHAT, FINDCHAT } from '../../services/api';

class Chat extends Component<> {
  constructor(props){
    super(props);

    this.state = {
      messages: [],
      user:{},
      me:{},
      chat:{}
    }
  }

  async componentDidMount() {
    const { params } = this.props.navigation.state
    const user = params?params.user:null
    const me = JSON.parse(await AsyncStorage.getItem('me'))
    let chat = await FINDCHAT({ receiver_id: user._id, sender_id: me._id, token: me.token })
    if(chat == null || !chat){
      chat = await CREATECHAT({ receiver_id: user._id, sender_id: me._id, token: me.token })
    }
    
    this.setState({user, me, chat, messages: chat.messages})

    socket.on(`message-${chat._id}-${me._id}`, (message) =>{
      
      this.setState({
        messages:[
          message,
          ...this.state.messages
        ]
      })
      
    });
    
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    const { user, me, chat } = this.state
    
    const sendMessage = { chat_id: chat._id, sender_id: me._id, receiver_id: user._id, messages: messages[0], token: me.token }
    
    SENDMESSAGE(sendMessage)
  }
  
  render() {
    const user = { _id, email, username } = this.state.me
    
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages =>{ this.onSend(messages)}}
        user={user}
      />
    )
  }
}

export default Chat;
