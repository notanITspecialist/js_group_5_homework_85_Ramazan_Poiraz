import axios from "axios";

export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';

export const getAlbumSuc = data => ({type: GET_ALBUM_SUCCESS, data});

export const getAlbum = id => async dispatch => {
    const data = await axios.get('http://localhost:8000/track/?album='+id);

    dispatch(getAlbumSuc(data.data));
};
