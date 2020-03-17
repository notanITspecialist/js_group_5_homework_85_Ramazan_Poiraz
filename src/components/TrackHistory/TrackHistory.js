import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {initTrackHistory} from "../../actions/user";
import {ListGroup, ListGroupItem} from "reactstrap";

const TrackHistory = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.login);

    let userToken = user.user.token ? user.user.token : '228';

    useEffect(() => {
        dispatch(initTrackHistory(userToken))
    }, [dispatch, userToken]);

    const hostory = user.trackHistory.map(e => (
        <ListGroupItem key={e._id}>
            <h5 className='d-inline mr-5'>author: {e.author.name}</h5>
            <h5 className='d-inline'>track: {e.track.name}</h5>
            <span className='float-right'>date: {e.date}</span>
        </ListGroupItem>
    ));
    return (
        <ListGroup>
            {hostory}
        </ListGroup>
    );
};

export default TrackHistory;