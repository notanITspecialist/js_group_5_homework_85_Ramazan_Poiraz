import axios from "axios";

export const REGISTER_USER_RES = 'REGISTER_USER_RES';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const GET_TRACK_HISTORY = 'GET_TRACK_HISTORY';

export const LOGOUT_USER = 'LOGOUT_USER';



export const regUserRes = data => ({type: REGISTER_USER_RES, data});
export const regUserError = error => ({type: REGISTER_USER_ERROR, error});
export const loginUserError = error => ({type: LOGIN_USER_ERROR, error});

export const getTrackHistory = data => ({type: GET_TRACK_HISTORY, data});

export const logoutUserSuc = () => ({type: LOGOUT_USER});



export const registerUser = (register, history) => async dispatch => {
    try {
        const data = await axios.post('http://localhost:8000/user', register);
        if(data.data.error) return  dispatch(regUserError(data.data.error));
         dispatch(regUserRes(data.data));
        history.push('/')
    } catch (e) {
        dispatch(regUserError(e));
    }
};

export const loginUser = (register, history) => async dispatch => {
    try {
        const data = await axios.post('http://localhost:8000/user/sessions', register);
        if(data.data.error) return  dispatch(loginUserError(data.data.error));
        dispatch(regUserRes(data.data));
        history.push('/')
    } catch (e) {
        dispatch(loginUserError(e));
    }
};

export const initTrackHistory = token => async dispatch => {
    const data = await axios.get('http://localhost:8000/track_history', {headers: {'Authorization': `Token ${token}`}});
    dispatch(getTrackHistory(data.data));
};

export const logoutUser = () => async (dispatch, getState) => {
    const token = getState().login.user.token;
    const header = {'Authorization': "Token "+token};

    await axios.delete('http://localhost:8000/user/sessions', {headers: header});
    dispatch(logoutUserSuc())
};