import axios from "axios";

export const GET_ARTIST_SUCCESS = 'GET_ARTIST_SUCCESS';

export const getArtistSuc = (data, id) => ({type: GET_ARTIST_SUCCESS, data, id});

export const getArtist = id => async dispatch => {
    const data = await axios.get('http://localhost:8000/album/?artist='+id);

    dispatch(getArtistSuc(data.data, id));
};