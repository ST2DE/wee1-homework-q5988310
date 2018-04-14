const express = require('express')
const app = express()


app.use('/about_me',express.static(__dirname+'/public'));

app.get('/about', function(req, res) {
	res.send(req.query.name +', Hello!');
});

app.listen(3000, function (){
    console.log('Listening on port 3000');
});
