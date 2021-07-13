import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl'


const MapApp = () => {
        const [viewport, setViewport] = useState({
            latitude: 45.4311,
            longitude: -75.3535,
            width: "500px",
            height: "400px",
            zoom: 6
        });

      return (
    <div>
        <ReactMapGL {...viewport} onViewportChange={viewport => {
            setViewport(viewport)
        }} mapboxApiAccessToken="pk.eyJ1IjoiYXVzdGlucm9iaW5zb24yMDI0IiwiYSI6ImNrcjE1em5qNDAxbXkybm4zbWs3b3h3YTEifQ.b3P8rKXgjapDCkXQ_qplPw">
          
        </ReactMapGL>
    </div>
  );
}

export default MapApp
