import axios from "axios";

export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';



export const getAlbumSuc = data => ({type: GET_ALBUM_SUCCESS, data});



export const getAlbum = id => async dispatch => {
    const data = await axios.get('http://localhost:8000/track/?album='+id);

    dispatch(getAlbumSuc(data.data));
};


export const addAlbum = async (data, token, history, author) => {
    await axios.post('http://localhost:8000/album', data, {headers: {'Authorization': `Token ${token}`}});
    history.push('/artist/'+author);
};

export const addTrackHistory = async (track, token) => {
    await axios.post('http://localhost:8000/track_history', {track: track._id, author: track.album.author}, {headers: {'Authorization': `Token ${token}`}});
};

export const addTrack = async (data, token, history) => {
    await axios.post('http://localhost:8000/track', data, {headers: {'Authorization': `Token ${token}`}});
    history.push('/album/'+data.album);
};

export const publishTrack = (token, id, albumId) => async dispatch => {
    await axios.post('http://localhost:8000/admin/track/'+id, {}, {headers: {'Authorization': 'Token '+token}} );
    dispatch(getAlbum(albumId));
};

export const deleteTrack = (token, id, albumId) => async dispatch => {
    await axios.delete('http://localhost:8000/admin/track/'+id, {headers: {'Authorization': 'Token '+token}} );
    dispatch(getAlbum(albumId));
};