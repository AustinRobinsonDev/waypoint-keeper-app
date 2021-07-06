import React, {useContext, useRef, useEffect } from 'react';
import WaypointContext from '../../context/waypoint/waypointContext';

const WaypointFilter = () => {
    const waypointContext = useContext(WaypointContext);
    const text = useRef('');
    const { filterWaypoints, clearFilter, filtered} = waypointContext;
    useEffect(() => {
        if (filtered === null) {
            text.current.value = ''
        }
    })
    const onChange = e => {
        if(text.current.value !== '') {
            filterWaypoints(e.target.value);
        } else {
            clearFilter();
        }
    }
    return (
        <form>
            <input ref={text}type="text" placeholder="filter waypoints" onChange={onChange}/>
        </form>
    )
}

export default WaypointFilter
