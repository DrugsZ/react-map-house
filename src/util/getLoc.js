let position = {};

let showPosition = (result) => {
  position = result;
};

let createLocWatch = () => {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  }
};

createLocWatch();


export let getMapScript = (ak) => {
  if (!global.AMap){
    global.AMap = {};
    const AMapScript  = new Promise( (resolve) => {
      global._initAMap = function(){
        resolve(global.AMap);
        global.document.body.removeChild(mapScript);
        global._initAMap = null;
      };
      const mapScript = document.createElement('script');
      mapScript.src = `http://webapi.amap.com/maps?v=1.4.6&key=${ak}&callback=_initAMap`;
      global.document.body.appendChild(mapScript);
    });
    return AMapScript;
  } else {
    return Promise.resolve(global.AMap);
  }
};


export let nowLoc = () => position;
// export default {
// 	getLoc
// }