import { Server, Socket } from 'socket.io';
import Logger from '@src/loaders/logger';

const EVENTS = {
  connection: 'connection',
  SERVER: {
    DATA: 'DATA',
  },
};

function socket({ io }: { io: Server }) {
  Logger.info(`Socket enabled`);
  io.on(EVENTS.connection, (socket: Socket) => {
    Logger.info(`socket${socket.id} connected`);
    socket.on('message', ({data})=> {
      console.log({data});
    });
  });
  
}

export default socket;
