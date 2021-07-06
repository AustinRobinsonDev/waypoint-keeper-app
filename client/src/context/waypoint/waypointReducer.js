import {ADD_WAYPOINT,
    DELETE_WAYPOINT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_WAYPOINT,
    FILTER_WAYPOINT,
    CLEAR_FILTER} from '../types';

export default (state, action) => {
    switch(action.type) {
        case ADD_WAYPOINT:
            return {
                ...state,
                waypoints: [...state.waypoints, action.payload]
            };
        case UPDATE_WAYPOINT:
            return {
                ...state,
                waypoints: state.waypoints.map(waypoint => waypoint.id === action.payload.id ?  action.payload : waypoint)
            }
        case DELETE_WAYPOINT:
            return {
                ...state,
                waypoints: state.waypoints.filter(waypoint => waypoint.id === action.payload.id)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
            case CLEAR_CURRENT:
                return {
                    ...state,
                    current: null
                };
            case FILTER_WAYPOINT:
                return {
                    ...state,
                    filtered: state.waypoints.filter(waypoint => {
                        const regex = new RegExp(`${action.payload}`, 'gi');
                        return waypoint.name.match(regex) || waypoint.tag.match(regex)
                    })
                }
                case CLEAR_FILTER:
                return {
                    ...state,
                    filtered: null
                };
        default: 
            return state;
    }
}