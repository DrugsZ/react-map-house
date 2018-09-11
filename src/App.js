import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { nowLoc, getMapScript } from "./util/getLoc";

class App extends Component {
	componentWillMount(){
		getMapScript('139470ef9125625ce6bfdfe200dd526c')
			.then( mapScript => console.log(mapScript))
	}
	componentDidMount(){
		window.nowLoc = nowLoc;
		nowLoc();
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
