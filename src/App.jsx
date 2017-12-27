import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render(){
		return (
			<h1>Hello </h1>
		);
	}
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);