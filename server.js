var express = require('express');
var bodyParser = require('body-parser');
var database = require('./server-assets/database');
var cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/friends', function(req, res) {
  res.send(database.getFriends());
});

app.post('/friends/new', function(req, res) {
  res.send(database.addFriend(req.body));
});







app.listen(3000);