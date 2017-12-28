import React from 'react';
import XLSX from 'xlsx';

export default class UploadFile extends React.Component {
    constructor(props){
        super(props);
        this.displayFileName = this.displayFileName.bind(this);
        // this.onClick = this.onClick.bind(this);
    }
    displayFileName(e){
        var file = document.getElementById('file');
        if(file.files.length > 0){
            var fileName = document.getElementById('filename');
            fileName.innerText = file.files[0].name;    
        }
        
        var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer

          var files = e.target.files, f = files[0];
          var reader = new FileReader();
          reader.onload = function(e) {
            var data = e.target.result;
            if(!rABS) data = new Uint8Array(data);
            var workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
        
            /* DO SOMETHING WITH workbook HERE */
            /* generate XLSX as base64 string */
            var b64 = XLSX.write(workbook, {bookType:'xlsx', type:'base64'});
            
            /* build FormData with the generated file */
            var fd = new FormData();
            fd.append('data', b64);
            
            /* send data */
            var req = new XMLHttpRequest();
            req.open("POST", "/api/upload", true);
            req.send(fd);
            
          };
          if(rABS) reader.readAsBinaryString(f); else reader.readAsArrayBuffer(f);

        
    }
    // onClick(){
        
    // }
    render(){
        return (
            <div className="box">
				{/*<form action="/upload" method="POST" encType="multipart/form-data" onSubmit={this.OnSubmit}>*/}
					<div className="file">
						<label className="file-label">
							<input id="file" className="file-input" type="file" name="resume" onChange={this.displayFileName}/>
							<span className="file-cta">
						        <span className="file-icon">
							        <i className="fa fa-upload"></i>
							    </span>
							    <span className="file-label" id="filename">
							        Choose a file…
							    </span>
							</span>
						</label>
						<button className="button" >Upload</button>
					</div>
				{/*</form>*/}
			</div>    
        );
    }    
}