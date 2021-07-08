import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import WaypointContext from '../../context/waypoint/waypointContext';

const WaypointItem = ({ waypoint }) => {
    const waypointContext = useContext(WaypointContext);


    const { deleteWaypoint, setCurrent, clearCurrent } = waypointContext;

    const { id, name, tag, lat, type} = waypoint;

    const onDelete = () => {
        deleteWaypoint(id);
        clearCurrent();
    }

    return (
        <div className="card bg-light">
           <h3 className="text-primary text-left">
               {name}{' '} 
               <span style={{ float: 'right'}}
                className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type.charAt(0).toUpperCase() + type.slice(1)}
               </span>
           </h3> 
           <ul className="list">
               {tag && (<li>
                    {tag}
               </li>)}
               {lat && (<li>
                    {lat}
               </li>)}
           </ul>
           <p>
               <button className='btn btn-dark btn-sm' onClick={() => setCurrent(waypoint)}>Edit</button>
               <button className='btn btn-danger btn-sm' onClick={onDelete} >Delete</button>
           </p>
        </div>
    )
}

WaypointItem.propTypes = {
    waypoint: PropTypes.object.isRequired,
}

export default WaypointItem
