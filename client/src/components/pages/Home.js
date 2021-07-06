import React from 'react';
import Waypoints from '../waypoints/Waypoints';
import WaypointForm from '../waypoints/WaypointForm';
import WaypointFilter from '../waypoints/WaypointFilter';

const Home = () => {
    return (
        <div className='grid-2'>
            <div>
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
