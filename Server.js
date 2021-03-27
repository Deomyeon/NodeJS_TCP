var net = require("net");
var server = net.createServer(function(socket) {
    console.log('클라이언트 접속.');
    var text = "nyan";
    while (text.length > 0) {
        socket.write(text);
    }
    socket.on('data', function(chunk) {
        console.log('클라이언트 : ', chunk.toString());
    });

    socket.on('end', function() {
        console.log('클라이언트 나감.');
    })
    server.close();
});


server.listen(5678);

setInterval(function() {
    server.on('listening', function() {
        console.log('클라이언트 찾는중...');
    });

    server.on('close', function() {
        console.log('서버 닫음.');
    });
}, 100);