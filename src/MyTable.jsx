import React from 'react';
import MyRow from './MyRow.jsx';

export default class MyTable extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		
		var listRow = this.props.arr.map((el, index) => 
			(<MyRow 
				key={el.id}
				
				data={el} 
				editRow={this.props.editRow} 
				deleteRow={this.props.deleteRow} />
			)
		);
		return (
			<table className="table is-striped is-fullwidth">
				<thead>
					<tr>
						<th>Name</th>
						<th>Subject</th>
						<th>Delete</th>
					</tr>
				</thead>

				<tbody>
					{/*<MyRow data={{name: "Phuc", subject: "Toan"}} />*/}
					{ listRow }
				</tbody>

			</table>
		);
	}
}