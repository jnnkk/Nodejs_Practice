const http = require('http');
const express = require('express'); // import express

const app = express();

app.use('/', (req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express!</h1>');
    // send()는 express에서 제공하는 메소드로, response를 보내는 역할을 한다.
    // 문자열 타입은 text/html로, 객체 타입은 application/json으로 자동으로 설정된다.

}); // use는 미드웨어를 등록해주는 메소드
// '/'은 항상 실행되는 미드웨어이다., path임

app.listen(3000); // 서버를 listen하게 해주는 메소드