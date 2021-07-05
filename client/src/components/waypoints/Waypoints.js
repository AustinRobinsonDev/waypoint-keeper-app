import React, { Fragment, useContext } from 'react';
import WaypointItem from '../waypoints/WaypointItem'
import WaypointContext from '../../context/waypoint/waypointContext';

const Waypoints = () => {
    const waypointContext = useContext(WaypointContext);
     const { waypoints } = waypointContext;
    return (
        <Fragment>
            {waypoints.map(waypoint => ( 
               <WaypointItem waypoint={waypoint} key={waypoint.id}/> 
                ))}
        </Fragment>
    )
}

export default Waypoints
