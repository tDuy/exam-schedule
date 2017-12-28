import React from 'react';
import ResultRow from './ResultRow.jsx';

export default class ResultTable extends React.Component {
    constructor(props){
        super(props);
        
    }   
    render(){
        var listRow = this.props.arr.map((el) => (
            <ResultRow key={el.id} data={el} />
        ));
        var keys = Object.keys(this.props.arr[0]);
        keys.splice(keys.indexOf('id'), 1);
        var listTh = keys.map((key, index) => ( <th key={index} >{key.charAt(0).toUpperCase() + key.slice(1)}</th> ));
        return (
            <table className="table is-hoverable">
                <thead>
                    <tr>
                        {/*<th>Subject</th>
                        <th>Label</th>*/}
                        {listTh}
                    </tr>
                </thead>
                <tbody>
                    {listRow}
                </tbody>
            </table>
        );
    }
}