import {GET_ARTISTS_SUCCESS} from "../actions/artists";
import {GET_ARTIST_SUCCESS} from "../actions/artist";
import {GET_ALBUM_SUCCESS} from "../actions/album";

const initState = {
    artists: [],
    artist: {
        info: {},
        albums: []
    },
    album: {
        info: {},
        tracks: []
    }
};

const artistsReducer = (state = initState, action) => {
    if(action.type === GET_ARTISTS_SUCCESS){
        return {...state, artists: action.data}
    }

    if(action.type === GET_ARTIST_SUCCESS){
        const albums = action.data.sort((a, b) => b.release - a.release);

        if(action.data[0]) return {...state, artist: {info: albums[0].author ,albums: albums}};
        return {...state, artist: {info: {} ,albums: []}}
    }

    if(action.type === GET_ALBUM_SUCCESS){
        const tracks = action.data.sort((a, b) => a.increment - b.increment);

        if(action.data[0]) return {...state, album: {info: action.data[0].album ,tracks: tracks}};
        return {...state, album: {info: {} ,tracks: []}}
    }
    return state;
};

export default artistsReducer;