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
          ]
    };
    const [state, dispatch] = useReducer(waypointReducer, initialState);

    //add waypoint

    //delete waypoint

    //set current waypoint

    //clear current waypoint

    //update waypoint

    //filter waypoint

    //clear filter 


    return (
        <WaypointContext.Provider
        value={{
            waypoints: state.waypoints
        }}>
            {props.children}
        </WaypointContext.Provider>
    )
};

export default WaypointState;

