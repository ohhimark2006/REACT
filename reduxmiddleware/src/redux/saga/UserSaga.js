import {call, put, takeEvery, takeLatest, delay} from 'redux-saga/effects'

import {FETCH_USERS_REQUEST} from '../Action';

import {fetchUsersSucess, fetchUsersFailure} from '../ActionCreators'

import axios from 'axios';

function getUsersApi() {
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then( response => response.data)
}

function* fetchUsers() {
    try {
        yield delay(2000);
        const users = yield call(getUsersApi);
        yield put(fetchUsersSucess(users));
    } catch(e) {
        yield put(fetchUsersFailure(e));
    }
}

function* userSaga() {
  //  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default userSaga;
