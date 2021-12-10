import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import destination from './destination';
import crew from './crew';
import tech from './tech';

const rootReducer = (state, action) => {
  switch (action.type) {
  case HYDRATE:
    // console.log('HYDRATE', action);
    return action.payload;
  default: {
    const combineReducer = combineReducers({
      destination,
      crew,
      tech,
    });
    return combineReducer(state, action);
  }
  }
};

export default rootReducer;
