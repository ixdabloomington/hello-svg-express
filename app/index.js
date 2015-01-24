var express = require("express"),
    app = express(),
    port = 8080,
    ip = process.env.IP,
    router = express.Router();

router.get('/', function(req, res){
    res.sendFile( __dirname + '/static/html/demo.html');
});

app.use('/', router);
app.use('/img', express.static(__dirname + '/static/img'));

app.listen(port, ip);
console.log('App is running on ' + ip + ':' + port + '!');