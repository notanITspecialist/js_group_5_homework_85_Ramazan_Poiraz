import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteAlbum, getArtist, publishAlbum} from "../../actions/artist";
import {useParams} from "react-router";
import ListItem from "../ListItem/ListItem";


const Artist = props => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const info = useSelector(state => state.artists.artist.info);
    const albums = useSelector(state => state.artists.artist.albums);
    const user = useSelector(state => state.login);

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
                        <ListItem
                            key={e._id}
                            getArtistInfo={() => getAlbumInfo(e._id)}
                            userAuthor={e.userAuthor._id}
                            username={user.user._id}
                            name={e.name}
                            role={user.user.role}
                            published={e.published}
                            typeImage={'albums'}
                            photo={e.poster}
                            publish={() => dispatch(publishAlbum(user.user.token, e._id, id))}
                            delete={() => dispatch(deleteAlbum(user.user.token, e._id, id))}
                        />
                    ))}
                </div>
                :
                <h1>Artist dont have albums and tracks</h1>
            }
        </div>
    );
};

export default Artist;