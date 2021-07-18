
import React, { useState, useContext, useEffect, Fragment } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import WaypointContext from '../../context/waypoint/waypointContext';

const MapApp = () => {
 
  const waypointContext = useContext(WaypointContext);
  const { waypoints, getWaypoints } = waypointContext;
  //const [mappedWaypoints, setMappedWaypoints] = useState([waypoints]);
  // const { _id, name, tag, lat, lon} = waypoint;

  useEffect(() => {
        getWaypoints();
        //console.log()
        //eslint-disable-next-line
    },[])


  const [viewport, setViewport] = useState({
    latitude: 45.4311,
    longitude: -75.3535,
    width: "500px",
    height: "400px",
    zoom: 6
});
      return (
    <div>
        <ReactMapGL {...viewport} {...waypoints} onViewportChange={(viewport) => {
            setViewport(viewport)
        }} 
        mapboxApiAccessToken="pk.eyJ1IjoiYXVzdGlucm9iaW5zb24yMDI0IiwiYSI6ImNrcjE1em5qNDAxbXkybm4zbWs3b3h3YTEifQ.b3P8rKXgjapDCkXQ_qplPw"
        mapStyle='mapbox://styles/austinrobinson2024/ckr2iles21xj917nzmwcya94g'
        >
          {waypoints.map((singlePoint) => (<Marker key={singlePoint._id} latitude={singlePoint.position[0]} longitude={singlePoint.position[1]} >
              <div><p style={{ color: 'white'}}>{singlePoint.name}</p></div>
            </Marker>))}
        </ReactMapGL>
    </div>
  );
}

export default MapApp
