import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_TECHS_REQUEST, LOAD_TECHS_SUCCESS, LOAD_TECHS_FAILURE,
  LOAD_TECH_BY_NAME_REQUEST, LOAD_TECH_BY_NAME_SUCCESS, LOAD_TECH_BY_NAME_FAILURE,
} from '../reducers/tech';

// dummey data
import dummeyData from '../public/data.json'

// 행성 목록 불러오기
function loadTechAPI(data) {
  // return axios.get('/tech');
  return { data: dummeyData.technology }
}

function* loadTech(action) {
  try {
    const result = yield call(loadTechAPI, action.data);
    yield put({
      type: LOAD_TECHS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_TECHS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadTech() {
  yield takeLatest(LOAD_TECHS_REQUEST, loadTech);
}

// 특정 행성 정보 불러오기
function loadTechByNameAPI(data) {
  // return axios.get(`/tech/${data.name}`);
  const tech = dummeyData.technology.filter((tech) => tech.name.toLowerCase().replace(/ /gi, '_') === data.name)[0]
  return { data: tech }
}

function* loadTechByName(action) {
  try {
    const result = yield call(loadTechByNameAPI, action.data);
    yield put({
      type: LOAD_TECH_BY_NAME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_TECH_BY_NAME_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadTechByName() {
  yield takeLatest(LOAD_TECH_BY_NAME_REQUEST, loadTechByName);
}

export default function* techSaga() {
  yield all([
    fork(watchLoadTech),
    fork(watchLoadTechByName),
  ]);
}
