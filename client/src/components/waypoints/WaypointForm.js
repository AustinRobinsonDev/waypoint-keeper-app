import React, { useState, useContext, useEffect } from 'react';
import WaypointContext from '../../context/waypoint/waypointContext';
const WaypointForm = () => {

    const waypointContext = useContext(WaypointContext);
    const { addWaypoint, current, clearCurrent, updateWaypoint } = waypointContext;
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [waypoint, setWaypoint] = useState({
        name: '',
        tag: '',
        position: [],
        lat: '',
        lng:''
    });

    const { name, tag, position, lat, lng} = waypoint;
    const onChange = e => {
        setWaypoint({ ...waypoint, [e.target.name]: e.target.value});
        setLatitude({ ...latitude, [e.target.name]: e.target.value});
        setLongitude({ ...longitude, [e.target.name]: e.target.value});
    }
    useEffect(() => {
        if(current !== null) {
            setWaypoint(current);
            //setWaypoint({ [position]: [latitude, longitude]})
            console.log(current)
        } else {
            //setLatitude('');
            //setLongitude('');
            setWaypoint({        
                name: '',
                tag: '',
                position: [],
                lat: '',
                lng: ''
            })
        }
    }, [waypointContext, current]);



    const onSubmit = e => {
        e.preventDefault(); 
        if(current === null){
            addWaypoint(waypoint);

        } else {
            updateWaypoint(waypoint);
        } 
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Edit' : 'Add Waypoint'}</h2>
            <input type="text" placeholder="name" name="name" value={name} onChange={onChange}/>
            <input type="text" placeholder="tags" name="tag" value={tag} onChange={onChange}/>
            <input type="text" placeholder="latitude" name="latitude" value={latitude} onChange={onChange}/>
            <input type="text" placeholder="longitude" name="longitude" value={longitude} onChange={onChange}/>
            <h5>Waypoint Type</h5>
            {/* <input onChange={onChange} type="radio" name="type" value="personal" checked={type === 'personal'}/>{' '}Personal {' '}
            <input onChange={onChange} type="radio" name="type" value="professional" checked={type === 'professional'}/>{' '}Professional {' '} */}
            <div>
                <input type="submit" value={current ? 'Update' : 'Add Waypoint'} className="btn btn-primary btn-block"/>
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
            </div>}
        </form>
    )
}

export default WaypointForm;
