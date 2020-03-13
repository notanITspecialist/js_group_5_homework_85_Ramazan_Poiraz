import axios from "axios";

export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';

export const getArtistsSuc = data => ({type: GET_ARTISTS_SUCCESS, data});

export const getArtists = () => async dispatch => {
    const data = await axios.get('http://localhost:8000/artist');

    dispatch(getArtistsSuc(data.data));
};