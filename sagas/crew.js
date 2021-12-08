import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_CREWS_REQUEST, LOAD_CREWS_SUCCESS, LOAD_CREWS_FAILURE,
  LOAD_CREW_BY_NAME_REQUEST, LOAD_CREW_BY_NAME_SUCCESS, LOAD_CREW_BY_NAME_FAILURE,
} from '../reducers/crew';

// dummey data
import dummeyData from '../public/data.json'

// 행성 목록 불러오기
function loadCrewAPI(data) {
  // return axios.get('/crew');
  return { data: dummeyData.crew }
}

function* loadCrew(action) {
  try {
    const result = yield call(loadCrewAPI, action.data);
    yield put({
      type: LOAD_CREWS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_CREWS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadCrew() {
  yield takeLatest(LOAD_CREWS_REQUEST, loadCrew);
}

// 특정 행성 정보 불러오기
function loadCrewByNameAPI(data) {
  // return axios.get(`/crew/${data.name}`);
  const crew = dummeyData.crew.filter((dest) => dest.name.toLowerCase().replace(/ /gi, '_') === data.name)[0]
  return { data: crew }
}

function* loadCrewByName(action) {
  try {
    const result = yield call(loadCrewByNameAPI, action.data);
    yield put({
      type: LOAD_CREW_BY_NAME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_CREW_BY_NAME_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadCrewByName() {
  yield takeLatest(LOAD_CREW_BY_NAME_REQUEST, loadCrewByName);
}

export default function* crewSaga() {
  yield all([
    fork(watchLoadCrew),
    fork(watchLoadCrewByName),
  ]);
}
