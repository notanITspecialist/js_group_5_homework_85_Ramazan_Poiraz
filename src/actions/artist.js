import axios from "axios";

export const GET_ARTIST_SUCCESS = 'GET_ARTIST_SUCCESS';

export const getArtistSuc = (data, id) => ({type: GET_ARTIST_SUCCESS, data, id});

export const getArtist = id => async dispatch => {
    const data = await axios.get('http://localhost:8000/album/?artist='+id);

    dispatch(getArtistSuc(data.data, id));
};

export const getMyPublishedAlbums = (token, artist) => async dispatch => {
    const data = await axios.get('http://localhost:8000/album/?artist='+artist, {headers: {'Authorization': 'Token '+token}});

    dispatch(getArtistSuc(data.data));
};

export const publishAlbum = (token, id, artistId) => async dispatch => {
    await axios.post('http://localhost:8000/admin/album/'+id, {}, {headers: {'Authorization': 'Token '+token}} );
    dispatch(getArtist(artistId));
};

export const deleteAlbum = (token, id, artistId) => async dispatch => {
    await axios.delete('http://localhost:8000/admin/album/'+id, {headers: {'Authorization': 'Token '+token}} );
    dispatch(getArtist(artistId));
};