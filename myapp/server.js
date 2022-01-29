const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
});

// public안에 파일들을 쓰겠다는 코드
app.use('/react', express.static(path.join(__dirname, 'public')));
app.use('/',express.static(path.join(__dirname, 'myapp')));

// 유저가 /로 접속하면 public/index.html파일을 보내줌
//(요청, 응답)
// 응답.sendFile()하면 내가 원하는 파일을 보낼수있음
app.get('/react', function(req, res){
    res.sendFile(path.join(__dirname, 'public/main.html'))
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'myapp/public/index.html'))
});

// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname, 'myapp/public/index.html'))
// });