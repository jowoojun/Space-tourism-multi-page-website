import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import destinationSaga from './destination';
import crewSaga from './crew';
import techSaga from './tech';

// import { backendURL } from '../config/config';

// axios.defaults.baseURL = `${backendURL}/api`;
// // 쿠키도 같이 전달하고 싶으면 true로 해야함. 쿠키 사용시 true 안하면 401에러가 뜸.
// axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(destinationSaga),
    fork(crewSaga),
    fork(techSaga),
  ]);
}
