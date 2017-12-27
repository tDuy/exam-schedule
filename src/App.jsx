import React from 'react';
import ReactDOM from 'react-dom';

import MyTable from './MyTable.jsx';
import AddRow from './AddRow.jsx';


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
		this.state = {list: arr};
		this.addRowHandler = this.addRowHandler.bind(this);
		this.delRowHandler = this.delRowHandler.bind(this);
		this.editRowHandler = this.editRowHandler.bind(this);
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
	render(){
		return (
			<div className="columns">
				<div className="column">
					<MyTable arr={this.state.list} editRow={this.editRowHandler} deleteRow={this.delRowHandler}/>
					<AddRow createRow={this.addRowHandler} />
				</div>
				<div className="column">
					<h1>Result</h1>
				</div>
			</div>
		);
	}
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);