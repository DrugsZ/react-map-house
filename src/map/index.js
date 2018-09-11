import React from 'react';
import { getMapScript } from '../util/getLoc'

export default class AMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	_init(AMap,el) {
    const map = new AMap.Map(el)
    return map;
	}

	componentDidMount() {
		getMapScript('139470ef9125625ce6bfdfe200dd526c')
			.then(mapCtr => {
        console.log(mapCtr);
				this._init(mapCtr,this.refs.map)
			})
	}
	render() {
		return (
			<div ref='map' style={{'height':this.props.style.height}}></div>
		)
	}
}