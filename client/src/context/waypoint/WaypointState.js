import React, { useReducer } from 'react';
import WaypointContext from './waypointContext';
import axios from 'axios'
import waypointReducer from './waypointReducer';
import {
    ADD_WAYPOINT,
DELETE_WAYPOINT,
SET_CURRENT,
CLEAR_CURRENT,
WAYPOINT_ERROR,
UPDATE_WAYPOINT,
FILTER_WAYPOINT,
CLEAR_FILTER
} from '../types';

const WaypointState = props => {
    const initialState = {
        waypoints: [],
          current: null,
          filtered: null,
          error: null
    };
    const [state, dispatch] = useReducer(waypointReducer, initialState);

    //add waypoint
    const addWaypoint = async waypoint => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/waypoints', waypoint, config);
            dispatch({ type: ADD_WAYPOINT, payload: res.data});
        } catch (err) {
            dispatch({ type: WAYPOINT_ERROR, payload: err.response.msg});
        }
    }
    //delete waypoint
    const deleteWaypoint = id => {
        dispatch({ type: DELETE_WAYPOINT, payload: id});
    }
    //set current waypoint
    const setCurrent = waypoint => {
        dispatch({ type: SET_CURRENT, payload: waypoint});
    }
    //clear current waypoint
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }
    //update waypoint
    const updateWaypoint = waypoint => {
        dispatch({ type: UPDATE_WAYPOINT, payload: waypoint});
    }
    //filter waypoint
    const filterWaypoints = text => {
        dispatch({ type: FILTER_WAYPOINT, payload: text});
    }
    //clear filter 
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    }

    return (
        <WaypointContext.Provider
        value={{
            waypoints: state.waypoints,
            current: state.current,
            filtered: state.filtered,
            error: state.error,
            addWaypoint,
            deleteWaypoint,
            setCurrent,
            clearCurrent,
            updateWaypoint,
            filterWaypoints,
            clearFilter
        }}>
            {props.children}
        </WaypointContext.Provider>
    )
};

export default WaypointState;

