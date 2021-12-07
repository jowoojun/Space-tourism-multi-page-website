import styled from 'styled-components'
import { SubHeading_1, SubHeading_2 } from '../atoms/Context';

const PlanetDetailContainer = styled.div`
  margin: 0 1.5rem 3.625rem;
  padding: 0 3.25rem;
  border-top: 1px solid #383b4b;

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    margin: 0 98px 62px;
    padding: 0 57.5px 0 65.5px;
  }
  @media screen and (min-width: 1023px) {
    padding: 0;
    margin: 0;
  }
`

const DetailItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-top: 2rem;

  @media screen and (min-width: 767px) {
    margin-top: 29px;
  }
  @media screen and (min-width: 1023px) {
    margin-top: 28px;
    align-items: flex-start;
    width: 50%;
  }
`

const TextBlank = styled.div`
  height: 12px;
`

const PlanetDetail = ({travel, distance}) => {
  return (
    <PlanetDetailContainer>
      <DetailItemContainer>
        <SubHeading_2>AVG. DISTANCE</SubHeading_2>
        <TextBlank />
        <SubHeading_1>{distance}</SubHeading_1>
      </DetailItemContainer>
      <DetailItemContainer>
        <SubHeading_2>EST. TRAVEL TIME</SubHeading_2>
        <TextBlank />
        <SubHeading_1>{travel}</SubHeading_1>
      </DetailItemContainer>
    </PlanetDetailContainer>
  )
}

export default PlanetDetail;