import React, { useReducer } from 'react';
import WaypointContext from './waypointContext';
import axios from 'axios'
import waypointReducer from './waypointReducer';
import {
    ADD_WAYPOINT,
    CLEAR_WAYPOINTS,
DELETE_WAYPOINT,
SET_CURRENT,
CLEAR_CURRENT,
WAYPOINT_ERROR,
UPDATE_WAYPOINT,
FILTER_WAYPOINT,
CLEAR_FILTER,
GET_WAYPOINTS
} from '../types';

const WaypointState = props => {
    const initialState = {
          waypoints: null,
          current: null,
          filtered: null,
          error: null,
          viewports: {
            latitude: 33.585510,
            longitude: -86.288071,
            width: "500px",
            height: "400px",
            zoom: 6,
            bearing: 0,
            pitch: 0
          }
    };
    const [state, dispatch] = useReducer(waypointReducer, initialState);

    //get waypoints
    const getWaypoints = async () => {
        try {
            const res = await axios.get('/api/waypoints');
            dispatch({ type: GET_WAYPOINTS, payload: res.data });
            //console.log(res.data)
        } catch (err) {
            dispatch({ type: WAYPOINT_ERROR, payload: err.response });
        }
    }

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
            dispatch({ type: WAYPOINT_ERROR, payload: err.response });
        }
    }
    //delete waypoint
    const deleteWaypoint = async id => {
        try {
            await axios.delete(`/api/waypoints/${id}`);
            dispatch({ type: DELETE_WAYPOINT, payload: id});
        } catch (err) {
            dispatch({ type: WAYPOINT_ERROR, payload: err.response });
        }
    }

    //update waypoint
    const updateWaypoint = async waypoint => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/waypoints/${waypoint._id}`, waypoint, config);
            dispatch({ type: UPDATE_WAYPOINT, payload: res.data});
        } catch (err) {
            dispatch({ type: WAYPOINT_ERROR, payload: err.response });
        }

    }

    //clear waypoints
    const clearWaypoints = () => {
        dispatch({ type: CLEAR_WAYPOINTS });
    }
    //set current waypoint
    const setCurrent = waypoint => {
        dispatch({ type: SET_CURRENT, payload: waypoint});
    }
    //clear current waypoint
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
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
            viewports: state.viewports,
            addWaypoint,
            deleteWaypoint,
            setCurrent,
            clearCurrent,
            updateWaypoint,
            filterWaypoints,
            clearFilter,
            getWaypoints,
            clearWaypoints
        }}>
            {props.children}
        </WaypointContext.Provider>
    )
};

export default WaypointState;

