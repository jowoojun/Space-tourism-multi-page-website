import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CrewTemplate from '../../components/templates/CrewTemplate'

import { 
  LOAD_CREWS_REQUEST, 
  LOAD_CREW_BY_NAME_REQUEST,
  GET_CREW_NAME_LIST
} from '../../reducers/crew';

export default function Crew() {
  const router = useRouter();
  const { name } = router.query
  const dispatch = useDispatch();
  const { crewNameList, crew } = useSelector((state) => state.crew);

  useEffect(() => {
    dispatch({
      type: LOAD_CREWS_REQUEST,
    });
    dispatch({
      type: GET_CREW_NAME_LIST,
    });
  }, [])

  useEffect(() => {
    dispatch({
      type: LOAD_CREW_BY_NAME_REQUEST,
      data: { name: name }
    })
  }, [name])

  return (
    <CrewTemplate tabItems={crewNameList} crew={crew} />
  )
}