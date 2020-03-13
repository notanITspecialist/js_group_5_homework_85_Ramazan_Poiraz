import React, {useEffect} from 'react';

import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getArtists} from "../../actions/artists";

const Artists = props => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const artistsState = useSelector(state => state.artists.artists);

    useEffect(() => {
        dispatch(getArtists(id))
    },[dispatch, id]);

    const getArtistInfo = id => {
      props.history.push('/artist/' + id);
    };

    const artists = artistsState.map(e => (
        <Card key={e._id} className="w-25 d-inline-block m-1" style={{background: '#ccc'}} >
            <div className='p-2'>
                {e.photo ? <CardImg top width="100%" className='float-right' src={"http://localhost:8000/uploads/artists/" + e.photo} alt="Card image cap" /> : <p className='p-0 m-0'>Photo not found</p>}
            </div>
            <CardBody>
                <CardTitle className='h2'>{e.name}</CardTitle>
                <Button onClick={() => getArtistInfo(e._id)}>More info</Button>
            </CardBody>
        </Card>
    ));

    return (
        <div>
            {artists[0] ? artists : <h1>Artists not found</h1>}
        </div>
    );
};
export default Artists;