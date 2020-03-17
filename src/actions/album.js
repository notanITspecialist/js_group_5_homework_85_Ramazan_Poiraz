import axios from "axios";

export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';



export const getAlbumSuc = data => ({type: GET_ALBUM_SUCCESS, data});



export const getAlbum = id => async dispatch => {
    const data = await axios.get('http://localhost:8000/track/?album='+id);

    dispatch(getAlbumSuc(data.data));
};

export const addTrackHistory = async (track, token) => {
    await axios.post('http://localhost:8000/track_history', {track: track._id, author: track.album.author}, {headers: {'Authorization': `Token ${token}`}});
};