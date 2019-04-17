import SocketIOClient from 'socket.io-client';
import { URL_SERV } from '../constants';
const socket = SocketIOClient(URL_SERV, { origins:'*:*'});

export default socket;