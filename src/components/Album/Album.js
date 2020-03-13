import React, {useEffect} from 'react';
import {getAlbum} from "../../actions/Album";
import {Card, CardBody, CardTitle} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";


const Album = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const album = useSelector(state => state.artists.album);

    useEffect(() => {
        dispatch(getAlbum(id))
    }, [dispatch, id]);

    const tracks = album.tracks.map(e => (
        <Card key={e._id} style={{background: '#ccc', width: '25%'}} >
            <span>{e._id + 1}</span>
            <CardBody>
                <CardTitle className='h2'>{e.name}</CardTitle>
                <span>duration: {e.duration}s</span>
            </CardBody>
        </Card>
    ));

    return (
        <div>
            {album.tracks[0] ?
                <div >
                    <h3>{album.info.name}</h3>
                    <p>released: {album.info.release}</p>
                    <hr/>
                    <h4>Tracks</h4>
                    <div className='d-flex flex-wrap'>
                        {tracks}
                    </div>
                </div>
                :
                <h1>Album dont have tracks</h1>
            }
        </div>
    );
};

export default Album;