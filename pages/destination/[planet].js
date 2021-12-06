import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import PlanetTemplate from '../../components/templates/PlanetTemplate'

import data from '../../public/data.json'

export default function Planet() {
  const router = useRouter();
  const { planet } = router.query
  const [destination, setDestination] = useState({});

  useEffect(() => {
    data.destinations.map((dest) => {
      var targetName = dest.name.toLowerCase()
      if(planet === targetName) {
        setDestination(dest)
      }
    })
  }, [])

  return (
    <PlanetTemplate destination={destination} />
  )
}