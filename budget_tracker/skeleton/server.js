var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

/*Mongoose Connect*/
var db = 'mongodb://localhost/budgettracker';
mongoose.connect(db);

var User = require('./models/User');
var Expense = require('./models/Expense');

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.send(index.html);
});

app.post('/user', function(req, res) {
  req.body.username = req.body.username.toLowerCase();
  //Get New User With Populated Expenses
  // var checkUser = new User(req.body);
  //if user exists return user data else make a new user and return that user's data
  console.log(req.body.username)
  User.findOne({
    username: req.body.username
  }, function(err, result){
    if(result){
      console.log(result);
    } else {
      res.send("No user found");
    }
  });
});


app.post('/newexpense/:id', function(req, res) {
  //create a new expense with a param of the user's id
  //add it to that user's expenses array

});


app.post('/updatesalary/:id', function(req, res) {
  //update the salary of a user with a param of the user's id

});

app.get('/deleteexpense/:id', function(req, res) {
  //delete an expense with a param of that expense's id.

});


var port = 3000;
app.listen(port, function() {
  console.log("listening on port:" + port);
});
