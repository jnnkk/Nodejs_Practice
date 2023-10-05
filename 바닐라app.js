const http = require('http');
// 노드js에서 파일을 가져오는 방법, 모듈 가져오는 법임

var server = http.createServer(function(req,res){ 

    // response.writeHead(404,{'Content-Type':'text/html'});
    // response.end('Hello node.js!!');
    console.log('클라이언트가 접속했습니다.');
    // process.exit(); // 서버를 종료시키는 메소드
    console.log(req.url, req.method, req.headers); 
}); // 서버를 만들어주는 메소드

server.listen(3000, function(){
    console.log('서버가 돌아가고 있습니다.');
}); // 3000번 포트로 서버를 열어줌