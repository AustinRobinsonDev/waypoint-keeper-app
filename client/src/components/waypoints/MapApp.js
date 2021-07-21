import React, { useState, useContext, useEffect, useCallback } from 'react';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import WaypointContext from '../../context/waypoint/waypointContext';
import FontAwesome from 'react-fontawesome';

// const geolocateControlStyle= {
//   right: 10,
//   top: 10
// };

const MapApp = () => {
  const waypointContext = useContext(WaypointContext);
  const { waypoints, getWaypoints, current, viewports } = waypointContext;


  useEffect(() => {
    getWaypoints();
  },[]);

  const [viewport, setViewport] = useState({
    width: 500,
    height: 400,
    latitude: 34.328801,
    longitude: -87.389230,
    zoom: 8


  });

 

  // const currentChange = () => {
  //   if (current !== null) {
  //     setViewport({
  //       longitude: parseFloat(current.position[0]),
  //       latitude: parseFloat(current.position[1]),
  //       zoom: 14,
  //       transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
  //       transitionDuration: 'auto'
  //     });
  //   }
  // }
  //currentChange()
  // const currentChange = () => {
  //   if (viewports === current) {
  //     setViewport({
  //       ...viewport,
  //       longitude: parseFloat(current.position[0]),
  //       latitude: parseFloat(current.position[1]),
  //       zoom: 11,
  //       transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
  //       transitionDuration: 'auto'
  //     });
  //   }

  // };

      return (
        <div>
            <ReactMapGL {...viewport} onViewportChange={(viewport) => {
                  setViewport(viewport)
                }} 
              mapboxApiAccessToken="pk.eyJ1IjoiYXVzdGlucm9iaW5zb24yMDI0IiwiYSI6ImNrcjE1em5qNDAxbXkybm4zbWs3b3h3YTEifQ.b3P8rKXgjapDCkXQ_qplPw"
              mapStyle='mapbox://styles/austinrobinson2024/ckr2iles21xj917nzmwcya94g'
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
