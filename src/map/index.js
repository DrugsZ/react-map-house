import React from 'react';
import { getMapScript } from '../util/getLoc';

export default class AMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _init(AMap,el) {
    const map = new AMap.Map(el);;
    return map;
  }

  componentDidMount() {
    getMapScript(this.props.mapKey)
      .then(mapCtr => {
        this.props._mapReady(this._init(mapCtr,this.refs.map),mapCtr);
      });
  }
  render() {
    return (
      <div ref='map' style={this.props.style}></div>
    );
  }
}