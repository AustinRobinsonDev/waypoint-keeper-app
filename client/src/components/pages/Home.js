import React, { useContext, useEffect, useState } from 'react';
import Waypoints from '../waypoints/Waypoints';
import WaypointForm from '../waypoints/WaypointForm';
import WaypointFilter from '../waypoints/WaypointFilter';
import AuthContext from '../../context/auth/authContext';
import MapApp from '../waypoints/MapApp';

const Home = (props) => {
    const authContext = useContext(AuthContext);
    useEffect(() => {
        authContext.loadUser();

        //eslint-disable-next-line
    },[])
    const [viewport, setViewport] = useState({
        width: 500,
        height: 400,
        latitude: 33.2344,
        longitude: -87.2344,
        zoom: 8
      });
    return (
        <div className='grid-2'>
            <div>
                <MapApp viewport={viewport} setViewport={setViewport} />
                <WaypointForm />
            </div>
            <div>
                <WaypointFilter />
                <Waypoints viewport={viewport} setViewport={setViewport} />
            </div>
        </div>
    )
}

export default Home
