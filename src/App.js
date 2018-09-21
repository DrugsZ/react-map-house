import React, { Component } from 'react';
import './App.css';
import AMap from './map';
import { nowLoc } from './util/getLoc';
import MapContext from './context';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      map:{},
      AMap:{},
      lnglats:{},
      cneterMarker:{},
      isHasMap:false,
    };
    this._mapInit = this._mapInit.bind(this);
  }

  componentDidMount(){
    window._$r = this;
    window.nowLoc = nowLoc;
    nowLoc();
  }

  getCity(){
    let {AMap,map} = this.state;

    map.plugin('AMap.CitySearch',() => {
      let searchCityObj = new AMap.CitySearch();

      searchCityObj.getLocalCity( (status,result) => {
        console.log(status,result);
      });
    });
  }
  /**
   * @地图初始化成功后的回调函数
   *
   * @param[object] map 地图实例
   * @param [Object] AMap 高德地图SDK
   */
  _mapInit(map,AMap) {
    this.setState({
      isHasMap:true,
      map,
      AMap,
    });

    this.getCity();
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
      <MapContext.Provider value={{map:this.state.map}}>
        <div className="App">
          <div style={{'height':'100%','width':'10%'}}>
          </div>
          <div  style={{'height':'100%'}}>
            <AMap style={{'height':'100%'}} _mapReady={this._mapInit} mapKey='ab84a393cc50b269fa831a6e09652805'></AMap>
          </div>
        </div>
      </MapContext.Provider>
    );
  }
}





export default App;
