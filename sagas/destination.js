import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_DESTINATIONS_REQUEST, LOAD_DESTINATIONS_SUCCESS, LOAD_DESTINATIONS_FAILURE,
  LOAD_DESTINATION_BY_NAME_REQUEST, LOAD_DESTINATION_BY_NAME_SUCCESS, LOAD_DESTINATION_BY_NAME_FAILURE,
} from '../reducers/destination';

// dummey data
import dummeyData from '../public/data.json'

// 행성 목록 불러오기
function loadDestinationAPI(data) {
  // return axios.get('/destination');
  return { data: dummeyData.destinations }
}

function* loadDestination(action) {
  try {
    const result = yield call(loadDestinationAPI, action.data);
    yield put({
      type: LOAD_DESTINATIONS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_DESTINATIONS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadDestination() {
  yield takeLatest(LOAD_DESTINATIONS_REQUEST, loadDestination);
}

// 특정 행성 정보 불러오기
function loadDestinationByNameAPI(data) {
  // return axios.get(`/destination/${data.planet}`);
  const dest = dummeyData.destinations.filter((dest) => dest.name.toLowerCase() === data.planet)[0]
  return { data: dest }
}

function* loadDestinationByName(action) {
  try {
    const result = yield call(loadDestinationByNameAPI, action.data);
    yield put({
      type: LOAD_DESTINATION_BY_NAME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_DESTINATION_BY_NAME_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadDestinationByName() {
  yield takeLatest(LOAD_DESTINATION_BY_NAME_REQUEST, loadDestinationByName);
}

export default function* destinationSaga() {
  yield all([
    fork(watchLoadDestination),
    fork(watchLoadDestinationByName),
  ]);
}
