import React from 'react';
import XLSX from 'xlsx';

export default class UploadFile extends React.Component {
    constructor(props) {
        super(props);
        this.handleFile = this.handleFile.bind(this);
    }
    handleFile(e) {
        var files = e.target.files,
            f;
        var fileName = document.getElementById('filename');
        // var file = document.getElementById('file');
        if (files.length > 0) {
            f = files[0];
            fileName.innerText = f.name;
        }

        var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = e.target.result;
            if (!rABS) data = new Uint8Array(data);
            var workbook = XLSX.read(data, {
                type: rABS ? 'binary' : 'array'
            });

            /* DO SOMETHING WITH workbook HERE */
            /* generate XLSX as base64 string */
            var b64 = XLSX.write(workbook, {
                bookType: 'xlsx',
                type: 'base64'
            });

            /* build FormData with the generated file */
            var fd = new FormData();
            fd.append('data', b64);

            /* send data */
            var req = new XMLHttpRequest();
            req.onreadystatechange = function() {
                var a;
                if (req.readyState === 4 && req.status === 200) {
                    var blob = new Blob([req.response], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    });
                    // Trick for making downloadable link
                    a = document.createElement('a');
                    a.href = window.URL.createObjectURL(blob);
                    // Give filename you wish to download
                    a.download = "Result-schedule.xlsx";
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                }
            };
            req.open("POST", "/api/upload", true);
            req.responseType = "arraybuffer";
            req.send(fd);

        };
        if (rABS) reader.readAsBinaryString(f);
        else reader.readAsArrayBuffer(f);


    }
    render() {
        return ( 
            <div className = "box" > 
                <div className = "file is-info" >
                    <label className = "file-label" >
                        <div className = "control" >
                            <input id = "file" className = "file-input" type = "file" name = "resume" onChange = {this.handleFile} /> 
                        </div> 
                        <span className = "file-cta" >
                            <span className = "file-icon" >
                                <i className = "fa fa-upload" > </i> 
                            </span> 
                            <span className = "file-label" id = "filename" >
                                Choose a file… 
                            </span> 
                        </span> 
                    </label> 
                </div> 
                <p className = "help is-info" > The first worksheet must contain 2 columns "name" and "subject"</p> 
            </div>    
        );
    }
}