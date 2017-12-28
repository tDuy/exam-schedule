import React from 'react';

export default class AddRow extends React.Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		
		this.state = {name: true, subject: true};
	}
	onSubmit(e){
		e.preventDefault();
		var form = document.forms.AddRowForm;
		var nameVal = form.newName.value;
		var subVal = form.newSubject.value;
		
		var flag = true;
		if(nameVal.trim() === ""){
			this.setState({name: false});
			flag = false;	
		} else if(this.state.name === false)
			this.setState({name: true});
			
		if(subVal.trim() === ""){
			this.setState({subject: false});
			flag = false;
		} else if(this.state.subject === false)
			this.setState({subject: true});
			
		if(flag){
			this.props.createRow({
				name: nameVal,
				subject: subVal
			});
	
			form.newName.value = "";
			form.newSubject.value = "";	
		}
		
	}
	render(){
		return (
			<form className="box" onSubmit={this.onSubmit} name="AddRowForm">
				<div className="field">
					<div className="control">
						<input className={"input " + (!this.state.name ? 'is-danger' : '')} type="text" name="newName" placeholder="Name" />
					</div>
				</div>
				<div className="field">
					<div className="control">				
						<input className={"input " + (!this.state.subject ? 'is-danger' : '')} type="text" name="newSubject" placeholder="Subject" />
					</div>
				</div>
				<div className="field">
					<div className="control">	
						<input className="button is-info is-outlined" type="submit" name="submit" value="Add"/>
					</div>
				</div>
			</form>
		);
	}
}