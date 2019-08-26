const socketio = require('socket.io');

let io;
let guestNumber = 1;
const nickNames = {};
const namesUsed = [];
const currentRoom = {};

exports.listen = function(server) {
    // 启动 Socket.IO 服务器，允许它搭载在已有的 HTTP 服务商
    io = socketio.listen(server);
    io.set('log level', 1);
    io.sockets.on('connection', function(socket) { // 定义每个用户的处理逻辑
        // 当用户连接上，赋予它一个访客名
        guestNumber = assignGuestName(socket, guestNumber, namesUsed);
        // 用户连接上来时，把它放到聊天室 Lobby 里
        joinRoom(socket, 'Lobby')
        // 处理用户的消息，更名，以及聊天室的创建和变更
        handleMessageBroadcasting(socket, nickNames);
        handleNameChangeAttempts(socket, nickNames, namesUsed);
        socket.on('rooms', function() { // 当用户发出请求时，向其提供已经被占用的聊天室列表
            socket.emit('rooms', io.sockets.manager.rooms);
        });
        // 定义用户断开连接后的清除逻辑
        handleClientDisconnection(socket, nickNames, namesUsed)
    })
}