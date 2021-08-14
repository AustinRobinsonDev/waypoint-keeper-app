import React, { Fragment, useContext, useEffect, useState } from 'react';
import WaypointItem from '../waypoints/WaypointItem';
import Spinner from '../layout/Spinner';
import WaypointContext from '../../context/waypoint/waypointContext';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
//wrap under fragment "TransitionGroup"
//wrap individual components in CSSTransition

const Waypoints = (props) => {
    const waypointContext = useContext(WaypointContext);
    const { waypoints, filtered, getWaypoints, loading, current } = waypointContext;
    const { viewport, setViewport } = props;
    useEffect(() => {
        getWaypoints();
        //console.log('waypoints.js ', viewport)
        //eslint-disable-next-line
    },[])
    if (waypoints !== null && waypoints.length === 0 && !loading){
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
      {waypoints !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(waypoint => (
                <CSSTransition
                  key={waypoint._id}
                  timeout={500}
                  classNames='item'
                >
                  <WaypointItem viewport={viewport} setViewport={setViewport} waypoint={waypoint} />
                </CSSTransition>
              ))
            : waypoints.map(waypoint => (
                <CSSTransition
                  key={waypoint._id}
                  timeout={500}
                  classNames='item'
                >
                  <WaypointItem viewport={viewport} setViewport={setViewport} waypoint={waypoint} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
    )
}

export default Waypoints
