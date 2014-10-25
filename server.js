var express = require('express');
var bodyParser = require('body-parser');
// var database = require('./server-assets/database');
var cors = require('cors');
var app = express();
var port = 3000;

// MONGO SETUP
var mongoose = require('mongoose');
var Friend = require('./server-assets/Friend/friendController');

//Friend = { getFriends: function(){ .... } }


var databaseReference = 'mongodb://localhost/theFullestStack';

var connection = mongoose.connection;


app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/friends', Friend.getFriends);
app.post('/friends', Friend.addFriend);
app.delete('/friends/:id', Friend.unFriend);


mongoose.connect(databaseReference);
connection.once('open', function () {
 app.listen(port, function () {
   console.log('Everything is working and we are connected to our mongoDb on port: ' + port)
 });
});

















