import React, {useEffect} from 'react';

import {
    ListGroup
} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import {deleteArtist, getArtists, publishArtist} from "../../actions/artists";
import ListItem from "../ListItem/ListItem";

const Artists = props => {
    const dispatch = useDispatch();

    const artistsState = useSelector(state => state.artists.artists);
    const user = useSelector(state => state.login);

    useEffect(() => {
        dispatch(getArtists())
    },[dispatch]);

    const getArtistInfo = id => {
      props.history.push('/artist/' + id);
    };

    const artists = artistsState.map(e => (
        <ListItem
            key={e._id}
            getArtistInfo={() => getArtistInfo(e._id)}
            userAuthor={e.userAuthor._id}
            username={user.user._id}
            name={e.name}
            role={user.user.role}
            published={e.published}
            typeImage={'artists'}
            photo={e.photo}
            publish={() => dispatch(publishArtist(user.user.token, e._id)) }
            delete={() => dispatch(deleteArtist(user.user.token, e._id)) }
        />
    ));

    return (
        <ListGroup className='d-flex flex-wrap'>
            {artists[0] ? artists : <h1>Artists not found</h1>}
        </ListGroup>
    );
};
export default Artists;