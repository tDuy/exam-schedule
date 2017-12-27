import React from 'react';

export default class MyRow extends React.Component {
	constructor(props){
		super(props);
		this.onDblClick = this.onDblClick.bind(this);
		this.onClick = this.onClick.bind(this);
		this.onBlur = this.onBlur.bind(this);

		this.state = {name: true, subject: true};
	}
	componentDidUpdate(prevProps, prevState){
		if(this.state.name === false){
			var input = document.querySelector('input[name="name"]');
			input.focus();
		} else if(this.state.subject === false){
			var input = document.querySelector('input[name="subject"]');
			input.focus();
		}
	}
	onDblClick(e){
		// e.stopPropagation();
		var className = e.target.className;
		this.setState({ [className]: false });
	}
	onBlur(){
		var obj = {};
		obj.id = this.props.data.id;
		if(this.state.name === false){
			obj.name = document.querySelector('input[name="name"]').value;
			obj.subject = this.props.data.subject;
		} else{
			obj.subject = document.querySelector('input[name="subject"]').value;
			obj.name = this.props.data.name;
		}
			
		this.props.editRow(obj);
		
		this.setState({ name: true, subject: true });
	}
	onClick(e){
		e.preventDefault();
		this.props.deleteRow(this.props.data.id);
	}
	render(){
		var name_td;
		var input;
		var subject_td;
		if(this.state.name){
			// name_td = <td className="name" onDoubleClick={this.onDblClick} >{this.props.data.name}</td>;
			name_td = (
				<td className="name" onDoubleClick={this.onDblClick} >
					{this.props.data.name}
				</td>);
		} else {
			name_td = (
				<td className="name" onDoubleClick={this.onDblClick} >
					<input type="text" name="name" defaultValue={this.props.data.name} onBlur={this.onBlur} />
				</td>
				);
		}
		if(this.state.subject){
			subject_td = (
				<td className="subject" onDoubleClick={this.onDblClick} >
					{this.props.data.subject}
				</td>);
		} else {
			subject_td = (
				<td className="subject" onDoubleClick={this.onDblClick} >
					<input type="text" name="subject" defaultValue={this.props.data.subject} onBlur={this.onBlur} />
				</td>
				);
		}
		
		return (
			<tr>
				{ name_td }
				{ subject_td }
				<td><a className="delete is-medium" onClick={this.onClick}></a></td>
			</tr>
		);
	}
}