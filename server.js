const express = require('express');
const app = express();


const UploadController = require("./server/UploadController.js");

//require('dotenv').config();

app.use(express.static(__dirname + '/static'));
app.use(require('express-formidable')());

app.route('/api/upload')
	.post(UploadController);
	
app.route('/api')
	.get((req, res) => {
		res.send('Hello!');
	});



const port = process.env.PORT || 8000;
app.listen(port, function(){
	console.log('Listening at port ' + port);
});