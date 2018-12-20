import api from '../api';

import {takeLatest, put, call} from 'redux-saga/effects'

const LOAD_USERS = 'LOAD_USERS';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAILURE = 'LOAD_FAILURE';
const LOAD_MORE_SUCCESS = 'LOAD_MORE_SUCCESS';
const LOAD_MORE = 'LOAD_MORE';

const initialState = {
    data: null,
    error: null,
    loading: false
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                error: null,
                loading: true
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: null
            };
        case LOAD_MORE:
            return {
                ...state,
                error: null,
                loading: true,
                id: null
            };
        case LOAD_MORE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, ...action.data],
                error: null
            };
        default:
            return state;
    }
}

export function* fetchUsers() {
    const result = yield call(api.fetchUsers);
    if (result) {
        yield put({type: LOAD_SUCCESS, data: result})
    } else {
        yield put({type: LOAD_FAILURE, error: 'Something went wrong'})
    }
}

export function* fetchMoreUsers(id) {
    const result = yield call(api.fetchMoreUsers, id);
    if (result) {
        yield put({type: LOAD_MORE_SUCCESS, data: result})
    } else {
        yield put({type: LOAD_FAILURE, error: 'Something went wrong'})
    }
}

export function* watchRequest() {
    yield takeLatest(LOAD_USERS, fetchUsers);
    yield takeLatest(LOAD_MORE, fetchMoreUsers);
}

export function onUsersFetch() {
    return {
        type: LOAD_USERS
    };
}

export function onMoreUsersFetch(id) {
    return {
        type: LOAD_MORE,
        id
    };
}
