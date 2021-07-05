import React from 'react';
import PropTypes from 'prop-types'

const WaypointItem = ({ waypoint }) => {
    const { id, name, tag, lat, type} = waypoint;
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
               {/* {lng && (<li>
                    {lng}
               </li>)} */}
           </ul>
           <p>
               <button className='btn btn-dark btn-sm'>Edit</button>
               <button className='btn btn-danger btn-sm'>Delete</button>
           </p>
        </div>
    )
}

WaypointItem.propTypes = {
    waypoint: PropTypes.object.isRequired,
}

export default WaypointItem
