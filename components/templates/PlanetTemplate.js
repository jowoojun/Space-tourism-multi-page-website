import styled from 'styled-components'

import Header from './Header'
import ImagePlanet from '../UI/atoms/ImagePlanet'
import ContextType2 from '../UI/molecules/ContextType2'
import PlanetDetail from '../UI/molecules/PlanetDetail'
import VerticalTabsText from '../UI/molecules/VerticalTabsText'
import HeaderNavText from '../UI/molecules/HeaderNavText'

import { ImageInfo } from '../../config/designConfig'

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background: url(/destination/background-destination-mobile.jpg) no-repeat;
  background-size: cover;
  @media screen and (min-width: 767px) {
    background: url(/destination/background-destination-tablet.jpg) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1430px) {
    background: url(/destination/background-destination-desktop.jpg) no-repeat;
    background-size: cover;
    justify-content: space-between;
  } 
`

const DesktopSpreadContainer = styled.div`
  @media screen and (min-width: 1430px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 163px 112px 230px;
  }
`

const ContentTextContainer = styled.div`
  @media screen and (min-width: 1430px) {
    width: 445px;
  }
`

const PlanetTemplate = ({destination, tabItems}) => {
  return (
    <PageContainer>
      <Header />
      {destination ? 
        <>
          <HeaderNavText number={"01"} text={"PICK YOUR DESTINATION"} />
          <DesktopSpreadContainer>
            <>
              <ImagePlanet images={destination.images} name={destination.name} imageInfo={ImageInfo.destination} />
            </>
            <ContentTextContainer>
              <VerticalTabsText tabItems={tabItems}/>
              <ContextType2 name={destination.name} context={destination.description}/>
              <PlanetDetail travel={destination.travel} distance={destination.distance}/>
            </ContentTextContainer>
          </DesktopSpreadContainer>
        </>
      :
        null
      }
    </PageContainer>
  )
}

export default PlanetTemplate;