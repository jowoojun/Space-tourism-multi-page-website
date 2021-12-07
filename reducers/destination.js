import produce from '../utils/produce';

export const initialState = {
  destination: null,
  mainDestination: [],
  destinationNameList: [],
  loadDestinationLoading: false,
  loadDestinationDone: false,
  loadDestinationError: null,
};

export const LOAD_DESTINATIONS_REQUEST = 'LOAD_DESTINATIONS_REQUEST';
export const LOAD_DESTINATIONS_SUCCESS = 'LOAD_DESTINATIONS_SUCCESS';
export const LOAD_DESTINATIONS_FAILURE = 'LOAD_DESTINATIONS_FAILURE';

export const LOAD_DESTINATION_BY_NAME_REQUEST = 'LOAD_DESTINATION_BY_NAME_REQUEST';
export const LOAD_DESTINATION_BY_NAME_SUCCESS = 'LOAD_DESTINATION_BY_NAME_SUCCESS';
export const LOAD_DESTINATION_BY_NAME_FAILURE = 'LOAD_DESTINATION_BY_NAME_FAILURE';

export const GET_DESTINATION_NAME_LIST = 'GET_DESTINATION_NAME_LIST';

const ReducerDestination =  (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_DESTINATIONS_REQUEST: {
    draft.mainDestination = [];
    draft.loadDestinationLoading = true;
    draft.loadDestinationDone = false;
    draft.loadDestinationError = null;
    break;
  }
  case LOAD_DESTINATIONS_SUCCESS: {
    draft.loadDestinationLoading = false;
    draft.loadDestinationDone = true;
    draft.mainDestination = draft.mainDestination.concat(action.data);
    break;
  }
  case LOAD_DESTINATIONS_FAILURE: {
    draft.loadDestinationLoading = false;
    draft.loadDestinationError = action.error;
    break;
  }
  case LOAD_DESTINATION_BY_NAME_REQUEST: {
    draft.loadDestinationLoading = true;
    draft.loadDestinationDone = false;
    draft.loadDestinationError = null;
    break;
  }
  case LOAD_DESTINATION_BY_NAME_SUCCESS: {
    draft.loadDestinationLoading = false;
    draft.loadDestinationDone = true;
    draft.destination = action.data;
    break;
  }
  case LOAD_DESTINATION_BY_NAME_FAILURE: {
    draft.loadDestinationLoading = false;
    draft.loadDestinationError = action.error;
    break;
  }
  case GET_DESTINATION_NAME_LIST: {
    draft.destinationNameList = []
    const nameList = draft.mainDestination.map(({ name }) => {
      return { 
        name: name.toLowerCase(),
        href: `/destination/${name.toLowerCase()}`
      }
    });
    draft.destinationNameList = draft.destinationNameList.concat(nameList)
    break;
  }
  default:
    break;
  }
});

export default ReducerDestination;