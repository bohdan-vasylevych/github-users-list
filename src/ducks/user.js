import api from '../api';

import {takeLatest, put, call} from 'redux-saga/effects'

const LOAD_USERS_INFO = 'LOAD_USERS_INFO';
const LOAD_USERS_INFO_SUCCESS = 'LOAD_USERS_INFO_SUCCESS';
const LOAD_USERS_INFO_FAILURE = 'LOAD_FAILURE';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export default function usersInfoReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS_INFO:
            return {
                ...state,
                error: null,
                loading: true
            };
        case LOAD_USERS_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case LOAD_USERS_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: null
            };
        default:
            return state;
    }
}

export function* fetchUsersInfo(userName) {
    const result = yield call(api.fetchUsersInfo, userName);
    if (result) {
        yield put({type: LOAD_USERS_INFO_SUCCESS, data: result});
    } else {
        yield put({type: LOAD_USERS_INFO_FAILURE, error: 'Something went wrong'});
    }
}
export function* watchRequest() {
    yield takeLatest(LOAD_USERS_INFO, fetchUsersInfo);
}

export function onUsersInfoFetch(userName) {
    return {
        type: LOAD_USERS_INFO,
        userName
    };
}
