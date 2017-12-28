const express = require('express');
const app = express();
const fs = require("fs");
const XLSX = require("xlsx");

const Graph = require("./static/Graph.js");

//require('dotenv').config();

app.use(express.static(__dirname + '/static'));
app.use(require('express-formidable')());

app.route('/api/upload')
	.post((req, res) => {
		// fs.writeFile(req.fields.file, req.fields.data, 'base64', function(err, r) {
		// 	res.end("wrote to " + req.fields.file);
		// });
		// console.log(req.fields.file);
		// console.log(req.fields.data);
		var workbook = XLSX.read(req.fields.data, {type: "base64"});
		
		// XLSX.writeFile(workbook, 'out.xlsb');
		
		var sheetNames = workbook.SheetNames;
		var sheet1 = workbook.Sheets[sheetNames[0]];
		var arr_json = XLSX.utils.sheet_to_json(sheet1);
		
		var myGraph = Graph.fromArr(arr_json);
		var labels = myGraph.coloring();
		// console.log(labels);
		
		var result = myGraph.subjects.map((sub, index) => {
			return {subject: sub, label: labels[index] };
		});
		
		console.log(result);
		// console.log(arr_json);
		res.end();
	});
app.route('/api')
	.get((req, res) => {
		res.send('Hello!');
	});



const port = process.env.PORT || 8000;
app.listen(port, function(){
	console.log('Listening at port ' + port);
});