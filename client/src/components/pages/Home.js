import React, { useContext, useEffect } from 'react';
import Waypoints from '../waypoints/Waypoints';
import WaypointForm from '../waypoints/WaypointForm';
import WaypointFilter from '../waypoints/WaypointFilter';
import AuthContext from '../../context/auth/authContext';
import MapApp from '../waypoints/MapApp';

const Home = () => {
    const authContext = useContext(AuthContext);
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    },[])
    return (
        <div className='grid-2'>
            <div>
                <MapApp />
                <WaypointForm />
            </div>
            <div>
                <WaypointFilter />
                <Waypoints />
            </div>
        </div>
    )
}

export default Home
