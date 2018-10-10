let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let port = 3001;

io.on('connection', (socket) => {
    socket.broadcast.emit('user-connected', {
        author: socket.request.connection.remoteAddress,
        text: 'has connected'
    });

    consoleLog(socket, 'has connected');

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', {
            author: socket.request.connection.remoteAddress,
            text: 'has disconnected'
        });

        consoleLog(socket, 'has disconnected');
    });

    socket.on('new-message', (text) => {
        io.emit('receive-message', {
            author: socket.request.connection.remoteAddress,
            text
        });

        consoleLog(socket, 'new message');
    });
});

function consoleLog(socket, text) {
    console.log({
        author: socket.request.connection.remoteAddress,
        text
    });
}

http.listen(port, () => {
    console.log('listening on *:' + port);
});