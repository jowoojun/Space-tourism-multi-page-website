import styled from 'styled-components'

import Header from './Header'
import PlanetImages from '../UI/molecules/PlanetImages'
import ContextType2 from '../UI/molecules/ContextType2'
import PlanetDetail from '../UI/molecules/PlanetDetail'
import VerticalTabs from '../UI/molecules/VerticalTabs'
import HeaderNavText from '../UI/molecules/HeaderNavText'

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: url(/destination/background-destination-mobile.jpg) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767px) {
    background: url(/destination/background-destination-tablet.jpg) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1023px) {
    background: url(/destination/background-destination-desktop.jpg) no-repeat;
    background-size: cover;
  } 
`

const Horizon = styled.div`
  margin: 0 1.5rem;
  border-top: 1px solid #383b4b;
`

const PlanetTemplate = ({destination}) => {
  return (
    <PageContainer>
      <Header />
      {destination ? 
        <>
          <HeaderNavText />
          <PlanetImages images={destination.images}/>
          <VerticalTabs />
          <ContextType2 name={destination.name} context={destination.description}/>
          <Horizon />
          <PlanetDetail travel={destination.travel} distance={destination.distance}/>
        </>
      :
        null
      }
    </PageContainer>
  )
}

export default PlanetTemplate;