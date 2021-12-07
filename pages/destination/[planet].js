import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PlanetTemplate from '../../components/templates/PlanetTemplate'

import { LOAD_DESTINATION_REQUEST } from '../../reducers/destination';

export default function Planet() {
  const router = useRouter();
  const { planet } = router.query
  const dispatch = useDispatch();
  const { destination } = useSelector((state) => state.destination);
  
  useEffect(() => {
    dispatch({
      type: LOAD_DESTINATION_REQUEST,
      data: { planet: planet },
    })
  }, [planet])

  return (
    <PlanetTemplate destination={destination} />
  )
}