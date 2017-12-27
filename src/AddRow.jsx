import React from 'react';

export default class AddRow extends React.Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e){
		e.preventDefault();
		var form = document.forms.AddRowForm;
		this.props.createRow({
			name: form.newName.value,
			subject: form.newSubject.value
		});

		form.newName.value = "";
		form.newSubject.value = "";
	}
	render(){
		return (
			<form onSubmit={this.onSubmit} name="AddRowForm">
				<input type="text" name="newName" placeholder="Name" />
				<input type="text" name="newSubject" placeholder="Subject" />
				<input type="submit" name="submit" />
			</form>
		);
	}
}