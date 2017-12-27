import React from 'react';
import ReactDOM from 'react-dom';

import MyTable from './MyTable.jsx';
import AddRow from './AddRow.jsx';


var arr = [
			{name: "Phuc", subject: "Toan"},
			{name: "Phuc", subject: "Van"},
			{name: "Phuc", subject: "Su"},
			{name: "Truc", subject: "Toan"},
			{name: "Truc", subject: "Anh"},
		];

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {list: arr};
		this.addRowHandler = this.addRowHandler.bind(this);
		this.delRowHandler = this.delRowHandler.bind(this);
	}
	addRowHandler(obj){
		var arr = this.state.list.concat(obj);
		this.setState({list: arr});
	}
	delRowHandler(obj){
		var arr = this.state.list;
		var s2 = JSON.stringify(obj);
		var index;

		for(let i=0; i<arr; i++){
		  let s1 = JSON.stringify(arr[i]);
		  console.log(s1);
		  if(s2 === s1){
		  	// index = i;
		  	arr.splice(i, 1);
		  	break;
		  }
		}
		

		this.setState({list: arr});
	}
	render(){
		return (
			<div>
				
				<MyTable arr={this.state.list}  deleteRow={this.delRowHandler}/>
				<AddRow createRow={this.addRowHandler} />
			</div>
		);
	}
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);