import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class StudentGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('StudentGateway');

  afterInit(server: Server) {
    this.logger.log('Student Gateway Initialize!');
  }

  handleDisconnect(client: Socket) {
    this.logger.log('Client Connected: ', client.id);
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log('Client DisConnected: ', client.id);
  }

  @SubscribeMessage('msgToServer')
  handleMessage(
    client: Socket,
    { data }: { data: Object },
  ): WsResponse<Object> {
    // equivalent to client.emit('msgToClient',text)
    console.log('payload', data);
    return {
      event: 'msgToClient',
      data: {
        msg: 'wow',
        ok: true,
      },
    };
  }
}
