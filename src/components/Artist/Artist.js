import React, {useEffect} from 'react';
import {Button, Card, CardBody, CardImg, CardTitle} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {getArtist} from "../../actions/artist";
import {useParams} from "react-router";


const Artist = props => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const info = useSelector(state => state.artists.artist.info);
    const albums = useSelector(state => state.artists.artist.albums);

    useEffect(() => {
        dispatch(getArtist(id));
    },[dispatch, id]);

    const getAlbumInfo = id => {
      props.history.push('/album/'+id)
    };

    return (
        <div>
            {albums[0] ?
                <div>
                    <h1>{info.name}</h1>
                    <p>{info.info}</p>
                    <hr/>
                    <h3>Albums</h3>
                    {albums.map(e => (
                        <Card key={e._id} className="w-25 d-inline-block m-1" style={{background: '#ccc'}} >
                            <div className='p-2'>
                                {e.poster ? <CardImg top width="100%" src={"http://localhost:8000/uploads/albums/" + e.poster} alt="Card image cap" /> : <p className='p-0 m-0'>Poster not found</p>}
                            </div>
                            <CardBody>
                                <CardTitle className='h2'>{e.name}</CardTitle>
                                <p>released in {e.release}</p>
                                <p>number of tracks: {e.allTracks ? e.allTracks : 0}</p>
                                <Button onClick={() => getAlbumInfo(e._id)}>More info</Button>
                            </CardBody>
                        </Card>
                    ))}
                </div>
                :
                <h1>Artist dont have albums and tracks</h1>
            }
        </div>
    );
};

export default Artist;