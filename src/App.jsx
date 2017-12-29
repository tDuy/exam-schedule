import React from 'react';
import ReactDOM from 'react-dom';

import MyTable from './MyTable.jsx';
import AddRow from './AddRow.jsx';

import ResultTable from './ResultTable.jsx';
import Graph from './Graph.js';

import UploadFile from './UploadFile.jsx';

var arr = [
			{id: 0, name: "Phuc", subject: "Toan"},
			{id: 1, name: "Phuc", subject: "Van"},
			{id: 2, name: "Phuc", subject: "Su"},
			{id: 3, name: "Truc", subject: "Toan"},
			{id: 4, name: "Truc", subject: "Anh"},
		];

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {list: arr, exe: false, result: []};
		this.addRowHandler = this.addRowHandler.bind(this);
		this.delRowHandler = this.delRowHandler.bind(this);
		this.editRowHandler = this.editRowHandler.bind(this);
		
		this.execute = this.execute.bind(this);
	}
	addRowHandler(obj){
		var id = new Date().getTime();
		var arr = this.state.list.concat({id: id, name: obj.name, subject: obj.subject });
		this.setState({list: arr});
	}
	editRowHandler(obj){
		var arr = this.state.list;
		for(let i=0; i<arr.length; i++){
			if(arr[i].id === obj.id){
				arr[i] = obj;
				break;
			}
		}
		this.setState({list: arr});
	}
	delRowHandler(id){
		var arr = this.state.list;
		
		for(let i=0; i<arr.length; i++){
			if(arr[i].id === id){
				arr.splice(i, 1);
				break;
			}
		}
		
		this.setState({list: arr});
	}
	execute(){
		var myGraph = Graph.fromArr(this.state.list);
		var labels = myGraph.coloring();
		// console.log(labels);
		
		var result = myGraph.subjects.map((sub, index) => {
			return {id: index, subject: sub, label: labels[index] };
		});
		
		this.setState({ exe: true, result: result});
	}
	render(){
		return (
		<div className="container">	
			<div className="columns">
				<div className="column">
					<h1 className="title is-4">Input</h1>
					<MyTable arr={this.state.list} editRow={this.editRowHandler} deleteRow={this.delRowHandler}/>
				</div>
				<div className="column">
					<h1 className="title is-4">Result</h1>
					{this.state.exe && <ResultTable arr={this.state.result} /> }
				</div>
			</div>
			<div className="columns">
				<div className="column">
					<AddRow createRow={this.addRowHandler} />
					<div className="">
						<button className="button is-primary" onClick={this.execute}>Calculate</button>
					</div>
				</div>
				<div className="column">
					<UploadFile />
				</div>
			</div>
		</div>
		);
	}
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);