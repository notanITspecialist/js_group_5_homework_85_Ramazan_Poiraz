import axios from "axios";

export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';

export const getArtistsSuc = data => ({type: GET_ARTISTS_SUCCESS, data});

export const getArtists = () => async dispatch => {
    const data = await axios.get('http://localhost:8000/artist');

    dispatch(getArtistsSuc(data.data));
};

export const getMyPublishedArtist = token => async dispatch => {
  const data = await axios.get('http://localhost:8000/artist/user', {headers: {'Authorization': 'Token '+token}});

    dispatch(getArtistsSuc(data.data));
};

export const addArtist = async (data, token, history) => {
    await axios.post('http://localhost:8000/artist',data, {headers: {'Authorization': 'Token '+token}} );
    history.push('/');
};

export const publishArtist = (token, id) => async dispatch => {
    await axios.post('http://localhost:8000/admin/artist/'+id, {}, {headers: {'Authorization': 'Token '+token}} );
    dispatch(getArtists());
};

export const deleteArtist = (token, id) => async dispatch => {
    await axios.delete('http://localhost:8000/admin/artist/'+id,{headers: {'Authorization': 'Token '+token}} );
    dispatch(getArtists());
};