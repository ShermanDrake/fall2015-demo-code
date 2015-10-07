// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
// var someFile = require('./scaffold.js') // looking for our own file

// Create Express App Object \\
var app = express();

// Application Configuration \\
// Data is normally sent in a URL encoded string OR stringified JSON
// {
//   name : 'McGillyCuddy',
//   age  : 120
// }
// name=McGillyCuddy&age=20

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serving Static Files (typically HTML, CSS, JS, or images)
app.use( express.static(__dirname + '/public') );

// Routes \\
app.get('/', function(req, res){
  console.log('Query : ', req.query)
  res.sendFile('hello.html', {root : './public'});
});

app.get('/about', function(req, res){
  res.send('All about this site!');
});

app.post('/formsubmit', function(req, res){
  console.log('Form :', req.body)
  res.redirect('/users/' + req.body.username + '/' + req.body.password)
})

/users/foo/bar
app.get('/users/:username/:password', function(req, res){
  res.send('Welcome back, ' + req.params.username + '. \n Your password is : ' + req.params.password)
})

app.get('/data', function(req, res){
  res.send({
    name : 'Bill',
    age : 120
  })
})

// Paramaterized / Dynamic Routes
app.get('/animals/:animalName/:animalSize', function(req, res){

  // 3 Objects commonly used on the Request Object
  // req.body - for POST type requests.  Gives access to the request body
  // req.query - for GET type requests.  Gives access to the query string
  // req.params - for paramaterized routes.  Gives access to the URL paramaters
  console.log(req.params)
  res.send('This is the page for ' + req.params.animalName)
})

// /animals/dog
// /animals/cat

// app.get('/dog')
// app.get('/cat')
// app.get('/turtle')



// Static file serving will override this route if it is defined BEFORE this route
// and there is a filename that matches the route defined below
app.get('/hello.html', function(req, res){
  res.send('You Shouldnt see me');
});

// Creating Server and Listening for Connections \\
var port = 3000;

app.listen(port, function(){
  console.log('Server running on port ' + port);

});