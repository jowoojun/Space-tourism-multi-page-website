import styled from 'styled-components'
import { SubHeading_1, SubHeading_2 } from '../atoms/Context';

const PlanetDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4.75rem 3.625rem;
`

const Blank = styled.div`
  height: 2rem;
`

const DistanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`

const TravelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`

const TextBlank = styled.div`
  height: 12px;
`

const PlanetDetail = ({travel, distance}) => {
  return (
    <PlanetDetailContainer>
      <DistanceContainer>
        <SubHeading_2>AVG. DISTANCE</SubHeading_2>
        <TextBlank />
        <SubHeading_1>{distance}</SubHeading_1>
      </DistanceContainer>
      <Blank />
      <TravelContainer>
        <SubHeading_2>EST. TRAVEL TIME</SubHeading_2>
        <TextBlank />
        <SubHeading_1>{travel}</SubHeading_1>
      </TravelContainer>
    </PlanetDetailContainer>
  )
}

export default PlanetDetail;