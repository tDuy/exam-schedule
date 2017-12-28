import React from 'react';

export default class ResultRow extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        var keys = Object.keys(this.props.data);
        keys.splice(keys.indexOf('id'), 1);
        var list = keys.map((key, index) => ( <td key={index}>{this.props.data[key]}</td> ));
        return (
            <tr>
                {list}
            </tr>
        );
    }
}