import React, { Component } from 'react';
import './App.css';
import AMap from './map'
import { nowLoc } from "./util/getLoc";

if(module.hot) {
  module.hot.accept('./App',() => {
      render(App);
  });
}

class App extends Component {
	componentDidMount(){
		window.nowLoc = nowLoc;
		nowLoc();
	}
	render() {
		return (
			<div className="App">
				<AMap style={{'height':'100vh'}}></AMap>
			</div>
		);
	}
}

export default App;
