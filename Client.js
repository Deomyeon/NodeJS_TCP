var net = require("net");

var ip = '127.0.0.1';
var port = 5678;

var socket = new net.Socket();
socket.connect({ host: ip, port: port }, function() {
    console.log('연결 성공');
    var text = "nyan";
    while (text.length > 0) {
        socket.write(text);
    }


    socket.end();
});

setInterval(function() {

    socket.on('data', function(chunk) {
        console.log('서버 : ', chunk.toString());
    });

    socket.on('end', function() {
        console.log('연결 종료');
    });
}, 100);