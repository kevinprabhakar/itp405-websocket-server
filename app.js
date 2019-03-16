let WebSocket = require('ws');

let wss = new WebSocket.Server({ port : process.env.PORT || 8080 });

//Function receives websocket connection variable
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // ws.send(message);
        wss.clients.forEach((client) => {
            client.send(message);
        });
    });

    // setTimeout(() =>{
    //     ws.send('hello');
    // }, 2000);
});
