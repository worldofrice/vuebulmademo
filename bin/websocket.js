import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
        for(let client of wss.clients){
            if(client.readyState === WebSocket.OPEN && client !== ws){
                client.send(data.toString());
            }
        }
    });
});