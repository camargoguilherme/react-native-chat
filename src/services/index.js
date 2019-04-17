import SocketIOClient from 'socket.io-client';

const socket = SocketIOClient('http://192.168.1.102:5000', { origins:'*:*'});

export default socket;