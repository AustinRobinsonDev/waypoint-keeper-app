import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import WaypointContext from '../../context/waypoint/waypointContext';
import {FlyToInterpolator} from 'react-map-gl';

const WaypointItem = (props) => {
    const waypointContext = useContext(WaypointContext);
    const { waypoint, viewport, setViewport } = props;
    const { deleteWaypoint, setCurrent, clearCurrent, current } = waypointContext;

    const { _id, name, tag, position, lat, lng} = waypoint;

    const onDelete = () => {
        deleteWaypoint(_id);
        clearCurrent();
    }
    const onEdit = () => {
    if (current !== null) {
        setViewport({
            ...viewport,
            longitude: current.position[0],
            latitude: current.position[1],
            zoom: 11,
            transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
            transitionDuration: 'auto'
          });
          console.log('item', current)
    }

    }

    return (
        <div className="card bg-light">
           <h3 className="text-primary text-left">
               {name}{' '} 
               {/* <span style={{ float: 'right'}}
                className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type.charAt(0).toUpperCase() + type.slice(1)}
               </span> */}
           </h3> 
           <ul className="list">
               {tag && (<li>
                    {tag}
               </li>)}
               {lat && (<li>
                    {lat}
               </li>)}
               {lng && (<li>
                    {lng}
               </li>)}
           </ul>
           <p>
               <button className='btn btn-dark btn-sm' onClick={() => {
                   setCurrent(waypoint);
                    onEdit();
                   }}>Edit</button>
               <button className='btn btn-danger btn-sm' onClick={onDelete} >Delete</button>
           </p>
        </div>
    )
}

WaypointItem.propTypes = {
    waypoint: PropTypes.object.isRequired,
}

export default WaypointItem
