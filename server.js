// express 모듈 사용
var express = require('express');
var app = express();
var router = require('./router/main')(app); // main.js를 불러와 app에 전달

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log(`listening port: ${server.address().port}`);
});

app.use(express.static('public'));

// app.get('/', function(req, res){
//     res.send('pknu smart factory team') 
// })

app.get('/info', function(req, res){
    res.send('member');
})

app.get('/info/member', function(req, res){
    res.sendFile(__dirname + '/info/member.json');
})