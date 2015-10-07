// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// app.use(function(req,res){
//     res.send('this gets checked first')
// })

app.get('/:someParameter', function(req, res, next){
    // res.send(req.params.someParameter)
    console.log('parameterized route')
    if ( req.params.someParameter === 'error' ) {
        next(new Error('my custom error'))
    }
    else {
        next()
    }
})

app.get('/whatever', function(req, res, next){

    res.send('this is not what you asked for')
    console.log('this is the "whatever" route.')
    // next()
})





// Routes \\
// Most common types of HTTP requests - GET, POST, PUT, DELETE
// app.get('/', function(req, res){
//     res.sendFile('hello.html', {root : './public'})
// });

app.post('/submit', function(req, res){
    console.log( req.body )
    res.redirect('/' + req.body.nodemon)
});
//  sent a request to: localhost:3000/whatever


// ?tin=123123123&nodemon=Fleekachu&birthWeight=1238912389&favoriteConditioner=Kroo
// app.get('/submit', function(req, res){
//     console.log('Query : ', req.query)
//     res.send('thanks for the info, sucker!')
//     // res.redirect('/submit')
// });

// app.get('/:nodemonName', function(req, res){
//     console.log( req.params )
//     res.send('Welcome Back, ' + req.params.nodemonName)
// });

// app.get('/:favoriteConditioner', function(req, res){
//     console.log( req.params )
// });

// {nodemonName : 'Scriptasaurus'}


// its okay to have route handlers registered to the same route
// AS LONG AS they are different request TYPES
// app.get('/submit', function(req, res){

// });
// app.put('/submit')
// app.delete('/submit')


app.post('/:user', function(req, res){
    database.find({username:req.params.user}, function(user){
        res.send('The user you are looking for is ' + user)
    })
})

// app.use(function(error, req, res, next){
//     console.log('500 error!')
//     console.log(error[0])
//     res.send('oops! something went wrong.')
// })

// If all went well, we should not have gotten this
app.use(function(req, res){
    res.send('ERROR! ERROR! PAGE NOT FOUND!')
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})