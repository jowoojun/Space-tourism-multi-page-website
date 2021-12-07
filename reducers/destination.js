import produce from '../utils/produce';

export const initialState = {
  destination: null,
  loadDestinationLoading: false,
  loadDestinationDone: false,
  loadDestinationError: null,
};

export const LOAD_DESTINATION_REQUEST = 'LOAD_DESTINATION_REQUEST';
export const LOAD_DESTINATION_SUCCESS = 'LOAD_DESTINATION_SUCCESS';
export const LOAD_DESTINATION_FAILURE = 'LOAD_DESTINATION_FAILURE';

const ReducerDestination =  (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_DESTINATION_REQUEST: {
    draft.loadDestinationLoading = true;
    draft.loadDestinationDone = false;
    draft.loadDestinationError = null;
    break;
  }
  case LOAD_DESTINATION_SUCCESS: {
    draft.loadDestinationLoading = false;
    draft.loadDestinationDone = true;
    draft.destination = action.data;
    break;
  }
  case LOAD_DESTINATION_FAILURE: {
    draft.loadDestinationLoading = false;
    draft.loadDestinationError = action.error;
    break;
  }
  default:
    break;
  }
});

export default ReducerDestination;