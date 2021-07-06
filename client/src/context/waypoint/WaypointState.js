import React, { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";
import WaypointContext from './waypointContext';
import waypointReducer from './waypointReducer';
import {ADD_WAYPOINT,
DELETE_WAYPOINT,
SET_CURRENT,
CLEAR_CURRENT,
UPDATE_WAYPOINT,
FILTER_WAYPOINT,
CLEAR_FILTER} from '../types';

const WaypointState = props => {
    const initialState = {
        waypoints: [
            {
              id: 1,
              name: "Jill Johnson",
              tag: "jill@gmail.com",
              lat: "111-111-1111",
              type: "personal",
            },
            {
              id: 2,
              name: "Sara Watson",
              tag: "sara@gmail.com",
              lat: "222-222-2222",
              type: "personal",
            },
            {
              id: 3,
              name: "Harry White",
              tag: "harry@gmail.com",
              lat: "333-333-3333",
              type: "professional",
            },
          ],
          current: null,
          filtered: null
    };
    const [state, dispatch] = useReducer(waypointReducer, initialState);

    //add waypoint
    const addWaypoint = waypoint => {
        waypoint.id = uuidv4();
        dispatch({ type: ADD_WAYPOINT, payload: waypoint});
        console.log(waypoint);
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

