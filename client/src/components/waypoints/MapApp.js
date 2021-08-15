import React, { useState, useContext, useEffect, useCallback } from 'react';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import WaypointContext from '../../context/waypoint/waypointContext';
import FontAwesome from 'react-fontawesome';

// const geolocateControlStyle= {
//   right: 10,
//   top: 10
// };

const MapApp = (props) => {
  const waypointContext = useContext(WaypointContext);
  const { waypoints, getWaypoints, current} = waypointContext;
  const {viewport, setViewport} = props;
  useEffect(() => {
    getWaypoints();
  },[]);

  useEffect(() => {
    if(current !== null) {
      //console.log(current)
      //console.log(viewport)
      setViewport({
        longitude: current.position[0],
        latitude: current.position[1],
        zoom: 11,
        transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
        transitionDuration: 'auto'
      });
    } 
}, [waypointContext, current]);
  const currentChange = () => {
    if (current !== null) {
      setViewport({
        longitude: parseFloat(current.position[0]),
        latitude: parseFloat(current.position[1]),
        zoom: 14,
        transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
        transitionDuration: 'auto'
      });
    }
  }
  const handleClick = (map, event) => {
    let clickedLatLng = event.lngLat;
    console.log(clickedLatLng);
    return clickedLatLng;
  }

      return (
        <div>
            <ReactMapGL {...viewport} onViewportChange={setViewport} onDblClick={handleClick}
              mapboxApiAccessToken="pk.eyJ1IjoiYXVzdGlucm9iaW5zb24yMDI0IiwiYSI6ImNrcjE1em5qNDAxbXkybm4zbWs3b3h3YTEifQ.b3P8rKXgjapDCkXQ_qplPw"
              mapStyle='mapbox://styles/austinrobinson2024/ckr2iles21xj917nzmwcya94g'
              //transitionDuration={1000}
              //transitionInterpolator={new FlyToInterpolator()}
            >
              {waypoints !== null ? (
                waypoints.map(singlePoint => (
                  <Marker key={singlePoint._id} latitude={singlePoint.position[0]} longitude={singlePoint.position[1]} >
                    <div><p style={{ color: 'white'}}><FontAwesome className="fa-solid fa-map-pin" name="map-pin" spin />{' '}{singlePoint.name}</p></div>
                  </Marker>))) : (<p>please enter waypoints</p>)
              }
            </ReactMapGL>
        </div>
      );
}

export default MapApp;
