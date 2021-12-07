import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PlanetTemplate from '../../components/templates/PlanetTemplate'

import { 
  LOAD_DESTINATIONS_REQUEST, 
  LOAD_DESTINATION_BY_NAME_REQUEST,
  GET_DESTINATION_NAME_LIST
} from '../../reducers/destination';

export default function Planet() {
  const router = useRouter();
  const { planet } = router.query
  const dispatch = useDispatch();
  const { destinationNameList, destination } = useSelector((state) => state.destination);

  useEffect(() => {
    dispatch({
      type: LOAD_DESTINATIONS_REQUEST,
    });
    dispatch({
      type: GET_DESTINATION_NAME_LIST,
    });
  }, [])

  useEffect(() => {
    dispatch({
      type: LOAD_DESTINATION_BY_NAME_REQUEST,
      data: { planet: planet }
    })
  }, [planet])

  return (
    <PlanetTemplate tabItems={destinationNameList} destination={destination} />
  )
}