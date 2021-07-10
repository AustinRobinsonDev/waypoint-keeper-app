import {ADD_WAYPOINT,
    GET_WAYPOINTS,
    CLEAR_WAYPOINTS,
    DELETE_WAYPOINT,
    SET_CURRENT,
    CLEAR_CURRENT,
    WAYPOINT_ERROR,
    UPDATE_WAYPOINT,
    FILTER_WAYPOINT,
    CLEAR_FILTER} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_WAYPOINTS:
            return {
                ...state,
                waypoints: action.payload,
                loading: false
            }
        case ADD_WAYPOINT:
            return {
                ...state,
                waypoints: [action.payload, ...state.waypoints],
                loading: false
            };
        case UPDATE_WAYPOINT:
            return {
                ...state,
                waypoints: state.waypoints.map(waypoint => waypoint._id === action.payload._id ?  action.payload : waypoint),
                loading: false
            }
        case DELETE_WAYPOINT:
            return {
                ...state,
                waypoints: state.waypoints.filter(waypoint => waypoint._id !== action.payload),
                loading: false
            };
        case CLEAR_WAYPOINTS:
            return {
                ...state,
                waypoints: null,
                filtered: null,
                current: null,
                error: null
            }
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
                }
                case WAYPOINT_ERROR:
                    return {
                        ...state,
                        error: action.payload
                    }
        default: 
            return state;
    }
}