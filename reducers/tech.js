import produce from '../utils/produce';

export const initialState = {
  tech: null,
  mainTech: [],
  techNameList: [],
  loadTechLoading: false,
  loadTechDone: false,
  loadTechError: null,
};

export const LOAD_TECHS_REQUEST = 'LOAD_TECHS_REQUEST';
export const LOAD_TECHS_SUCCESS = 'LOAD_TECHS_SUCCESS';
export const LOAD_TECHS_FAILURE = 'LOAD_TECHS_FAILURE';

export const LOAD_TECH_BY_NAME_REQUEST = 'LOAD_TECH_BY_NAME_REQUEST';
export const LOAD_TECH_BY_NAME_SUCCESS = 'LOAD_TECH_BY_NAME_SUCCESS';
export const LOAD_TECH_BY_NAME_FAILURE = 'LOAD_TECH_BY_NAME_FAILURE';

export const GET_TECH_NAME_LIST = 'GET_TECH_NAME_LIST';

const ReducerTech =  (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOAD_TECHS_REQUEST: {
    draft.mainTech = [];
    draft.loadTechLoading = true;
    draft.loadTechDone = false;
    draft.loadTechError = null;
    break;
  }
  case LOAD_TECHS_SUCCESS: {
    draft.loadTechLoading = false;
    draft.loadTechDone = true;
    draft.mainTech = draft.mainTech.concat(action.data);
    break;
  }
  case LOAD_TECHS_FAILURE: {
    draft.loadTechLoading = false;
    draft.loadTechError = action.error;
    break;
  }
  case LOAD_TECH_BY_NAME_REQUEST: {
    draft.loadTechLoading = true;
    draft.loadTechDone = false;
    draft.loadTechError = null;
    break;
  }
  case LOAD_TECH_BY_NAME_SUCCESS: {
    draft.loadTechLoading = false;
    draft.loadTechDone = true;
    draft.tech = action.data;
    break;
  }
  case LOAD_TECH_BY_NAME_FAILURE: {
    draft.loadTechLoading = false;
    draft.loadTechError = action.error;
    break;
  }
  case GET_TECH_NAME_LIST: {
    draft.techNameList = []
    const nameList = draft.mainTech.map(({ name }) => {
      return { 
        name: name.toLowerCase(),
        href: `/tech/${name.toLowerCase().replace(/ /gi, '_')}`
      }
    });
    draft.techNameList = draft.techNameList.concat(nameList)
    break;
  }
  default:
    break;
  }
});

export default ReducerTech;