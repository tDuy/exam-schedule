const express = require('express');
const app = express();

//require('dotenv').config();

app.use(express.static(__dirname + '/static'));

app.route('/api')
	.get((req, res) => {
		res.send('Hello!');
	});

const port = process.env.PORT || 8000;
app.listen(port, function(){
	console.log('Listening at port ' + port);
});
