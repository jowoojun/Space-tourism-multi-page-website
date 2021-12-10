import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TechTemplate from '../../components/templates/techTemplate'

import { 
  LOAD_TECHS_REQUEST, 
  LOAD_TECH_BY_NAME_REQUEST,
  GET_TECH_NAME_LIST
} from '../../reducers/tech';

export default function Tech() {
  const router = useRouter();
  const { name } = router.query
  const dispatch = useDispatch();
  const { techNameList, tech } = useSelector((state) => state.tech);

  useEffect(() => {
    dispatch({
      type: LOAD_TECHS_REQUEST,
    });
    dispatch({
      type: GET_TECH_NAME_LIST,
    });
  }, [])

  useEffect(() => {
    dispatch({
      type: LOAD_TECH_BY_NAME_REQUEST,
      data: { name: name }
    })
  }, [name])

  return (
    <TechTemplate tabItems={techNameList} tech={tech} />
  )
}