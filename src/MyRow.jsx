import React from 'react';

export default class MyRow extends React.Component {
	constructor(props){
		super(props);
		this.onDblClick = this.onDblClick.bind(this);
		this.onClick = this.onClick.bind(this);

		// this.state = {input: false};
	}
	onDblClick(e){

	}
	onClick(e){
		e.preventDefault();
		var subject = e.target.parentNode.previousSibling;
		var name = subject.previousSibling;
		this.props.deleteRow({name: name.innerText, subject: subject.innerText});
	}
	render(){

		return (
			<tr>

				<td onDoubleClick={this.onDblClick} >{this.props.data.name}</td>
				<td onDoubleClick={this.onDblClick} >{this.props.data.subject}</td>
				<td><a className="delete is-medium" onClick={this.onClick}></a></td>
			</tr>
		);
	}
}