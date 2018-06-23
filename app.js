var express = require('express')
var path = require('path')
var app = express();

app.use(express.static(path.join(__dirname + '/public')))

/*
app.get('/', function(req, res){
    res.send('Hello there\n')
})
*/

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/html/index.html')))

app.listen('8080', function(){
    console.log('server running on port 8080');
});
