import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_DESTINATION_REQUEST, LOAD_DESTINATION_SUCCESS, LOAD_DESTINATION_FAILURE,
} from '../reducers/destination';

// dummey data
import dummeyData from '../public/data.json'

// 행성정보 불러오기
function loadDestinationAPI(data) {
  // return axios.get('/destination');
  const dest = dummeyData.destinations.filter((dest) => dest.name.toLowerCase() === data.planet)[0]
  return { data: dest }
}

function* loadDestination(action) {
  try {
    const result = yield call(loadDestinationAPI, action.data);
    yield put({
      type: LOAD_DESTINATION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_DESTINATION_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadDestination() {
  yield takeLatest(LOAD_DESTINATION_REQUEST, loadDestination);
}

export default function* destinationSaga() {
  yield all([
    fork(watchLoadDestination),
  ]);
}
