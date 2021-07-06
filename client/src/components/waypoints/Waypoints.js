import React, { Fragment, useContext } from 'react';
import WaypointItem from '../waypoints/WaypointItem';
import WaypointContext from '../../context/waypoint/waypointContext';
//import { CSSTransition, TransitionGroup} from 'react-transition-group';
//wrap under fragment "TransitionGroup"
//wrap individual components in CSSTransition

const Waypoints = () => {
    const waypointContext = useContext(WaypointContext);
    const { waypoints, filtered } = waypointContext;
    if (waypoints.length === 0){
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
        
        {filtered !== null ? 
        filtered.map(waypoint => (
           <WaypointItem key={waypoint.id} waypoint={waypoint} />)) 
        :  
        waypoints.map(waypoint => ( 
            <WaypointItem key={waypoint.id} waypoint={waypoint}/> 
                ))}
        
        </Fragment>
    )
}

export default Waypoints
