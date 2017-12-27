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
			name: form.name.value,
			subject: form.subject.value
		});

		form.name.value = "";
		form.subject.value = "";
	}
	render(){
		return (
			<form onSubmit={this.onSubmit} name="AddRowForm">
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="subject" placeholder="Subject" />
				<input type="submit" name="submit" />
			</form>
		);
	}
}