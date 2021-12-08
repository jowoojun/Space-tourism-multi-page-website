import produce from '../utils/produce';

export const initialState = {
  crew: null,
  mainCrew: [],
  crewNameList: [],
  loadCrewLoading: false,
  loadCrewDone: false,
  loadCrewError: null,
};

export const LOAD_CREWS_REQUEST = 'LOAD_CREWS_REQUEST';
export const LOAD_CREWS_SUCCESS = 'LOAD_CREWS_SUCCESS';
export const LOAD_CREWS_FAILURE = 'LOAD_CREWS_FAILURE';

export const LOAD_CREW_BY_NAME_REQUEST = 'LOAD_CREW_BY_NAME_REQUEST';
export const LOAD_CREW_BY_NAME_SUCCESS = 'LOAD_CREW_BY_NAME_SUCCESS';
export const LOAD_CREW_BY_NAME_FAILURE = 'LOAD_CREW_BY_NAME_FAILURE';

export const GET_CREW_NAME_LIST = 'GET_CREW_NAME_LIST';

const ReducerCrew =  (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_CREWS_REQUEST: {
    draft.mainCrew = [];
    draft.loadCrewLoading = true;
    draft.loadCrewDone = false;
    draft.loadCrewError = null;
    break;
  }
  case LOAD_CREWS_SUCCESS: {
    draft.loadCrewLoading = false;
    draft.loadCrewDone = true;
    draft.mainCrew = draft.mainCrew.concat(action.data);
    break;
  }
  case LOAD_CREWS_FAILURE: {
    draft.loadCrewLoading = false;
    draft.loadCrewError = action.error;
    break;
  }
  case LOAD_CREW_BY_NAME_REQUEST: {
    draft.loadCrewLoading = true;
    draft.loadCrewDone = false;
    draft.loadCrewError = null;
    break;
  }
  case LOAD_CREW_BY_NAME_SUCCESS: {
    draft.loadCrewLoading = false;
    draft.loadCrewDone = true;
    draft.crew = action.data;
    break;
  }
  case LOAD_CREW_BY_NAME_FAILURE: {
    draft.loadCrewLoading = false;
    draft.loadCrewError = action.error;
    break;
  }
  case GET_CREW_NAME_LIST: {
    draft.crewNameList = []
    const nameList = draft.mainCrew.map(({ name }) => {
      return { 
        name: name.toLowerCase(),
        href: `/crew/${name.toLowerCase().replace(/ /gi, '_')}`
      }
    });
    draft.crewNameList = draft.crewNameList.concat(nameList)
    break;
  }
  default:
    break;
  }
});

export default ReducerCrew;