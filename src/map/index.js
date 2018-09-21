import React from 'react';
import { getMapScript } from '../util/getLoc';

export default class AMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    mapEl:{};
  }

  _init(AMap,el) {
    const map = new AMap.Map(el);
    return map;
  }

  componentDidMount() {
    getMapScript(this.props.mapKey)
      .then(mapCtr => {
        this.props._mapReady(this._init(mapCtr,this.mapEl),mapCtr);
      });
  }
  render() {
    return (
      <div  ref={(div) => { this.mapEl = div; }} style={this.props.style}></div>
    );
  }
}
