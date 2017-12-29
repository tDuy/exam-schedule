const XLSX = require("xlsx");
const Graph = require("../static/Graph.js");

module.exports = function UploadController(req ,res){
    var workbook = XLSX.read(req.fields.data, {type: "base64"});
		
		// XLSX.writeFile(workbook, 'out.xlsb');
		
		var sheetNames = workbook.SheetNames;
		var sheet1 = workbook.Sheets[sheetNames[0]];
		
		// format column name
		function format_column_name(name) { return name.toLowerCase(); }
		var range = XLSX.utils.decode_range(sheet1['!ref']);
		var headers = [];
		for(var C = range.s.c; C <= range.e.c; ++C) {
		  //  console.log(C);
		    var addr = XLSX.utils.encode_cell({r:range.s.r, c:C});
		    var cell = sheet1[addr];
		    if(!cell) continue;
		    headers.push( format_column_name(cell.v) );
		}
// 		console.log(headers);
		var arr_json = XLSX.utils.sheet_to_json(sheet1, {header:headers, range:1} );
		
		var myGraph = Graph.fromArr(arr_json);
		var labels = myGraph.coloring();
		// console.log(labels);
		
		var result = myGraph.subjects.map((sub, index) => {
			return {subject: sub, label: labels[index] };
		});
		var result_sheet = XLSX.utils.json_to_sheet(result);
		
		/* create workbook & set props*/
		const wb = { SheetNames: [], Sheets: {} };
		wb.Props = {
	    	Title: "Result from app",
	    	Author: "Duy Tu"
		};
	
		/* add to workbook*/
		var ws_name = "Schedule";
		XLSX.utils.book_append_sheet(wb, result_sheet, ws_name);
		
		// XLSX.writeFile(wb, 'out.xlsb');
	
		/* create file 'in memory' */
		var wbout = new Buffer(XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' }));
		
		// console.log(result);
// 		console.log(arr_json);
		var filename = "Schedule_File.xlsx";
		res.setHeader('Content-Type', "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
		res.setHeader('Content-Disposition', 'attachment; filename=' + filename);
	    res.type('application/octet-stream');
	    res.send(wbout);
}