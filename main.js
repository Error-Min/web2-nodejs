var http = require('http');
var fs = require('fs');
var url = require('url'); // 리콰이어  = 요구하다 http를 요구하다?

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;

    console.log(queryData.id);
    if (_url == '/') {
        _url = '/index.html';
    }
    if (_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id); // 경로에 해당하는 파일을 읽어서 가지고 온다.

});
app.listen(3000);