import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {loadUsersSuccess, LOAD_USERS_ERROR, LOAD_USERS_LOADING, LOAD_USERS_SUCCESS} from "../actions/actions";
import Api from '../api/api'

async function fetchAsync(func) {
    console.log(" calling fetch..")
   const response = await func();
   console.log(" fetch.. response.. " + response)
   if (response.ok) {
       return await response.json();
   }
   throw new Error("Unexpected error!!!");
}
function* fetchUser() {
   try {
       const users = yield fetchAsync(Api.getUsers);
       yield put({type: LOAD_USERS_SUCCESS, data: users});
   } catch (e) {
       yield put({type: LOAD_USERS_ERROR, error: e.message});
   }
}
export function* myUsersSaga() {
   // Allows concurrent fetches of users
   yield takeEvery(LOAD_USERS_LOADING, fetchUser);
   // Does not allow concurrent fetches of users
   // yield takeLatest(LOAD_USERS_LOADING, fetchUser);
}
export default myUsersSaga;