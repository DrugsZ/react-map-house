import React, { Component } from 'react';
import './App.css';
import AMap from './map';
import { nowLoc } from './util/getLoc';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      map:{},
      AMap:{},
      lnglats:{},
      cneterMarker:{},
    };
    this._mapInit = this._mapInit.bind(this);
  }
  componentDidMount(){
    window._$r = this;
    window.nowLoc = nowLoc;
    nowLoc();
  }

  /**
   * @地图初始化成功后的回调函数
   * 
   * @param[object] map 地图实例
   * @param [Object] AMap 高德地图SDK 
   */ 
  _mapInit(map,AMap) {
    console.log(map,AMap);
    const { latitude,longitude } = nowLoc().coords;

    let gps = [longitude,latitude];

    AMap.convertFrom(gps, 'gps', (status, result) => {
      if(status){
        console.log(status);
      }
      if (result.info === 'ok') {
        let lnglats = result.locations[0]; // Array.<LngLat>
        this.setState({
          lnglats
        });
        this.addCenter();
      }
    });
    this.setState({
      map,
      AMap,
    });
  }

  addCenter() {
    const {AMap,map} = this.state;
    const {lng,lat} = this.state.lnglats;

    let cneterMarker = new AMap.Marker({
      position:[lng,lat]
    });

    this.cneterMarker = cneterMarker;

    map.setCenter([lng,lat]);
    map.add(cneterMarker);
  }

  render() {
    return (
      <div className="App">
        <AMap style={{'height':'100vh'}} _mapReady={this._mapInit} mapKey='ab84a393cc50b269fa831a6e09652805'></AMap>
      </div>
    );
  }
}

export default App;
