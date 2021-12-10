import styled from 'styled-components'

import Header from './Header'
import ImageCrew from '../UI/atoms/ImageCrew'
import ContextType3 from '../UI/molecules/ContextType3'
import VerticalTabsCircle from '../UI/molecules/VerticalTabsCircle'
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
  background: url(/crew/background-crew-mobile.jpg) no-repeat;
  background-size: cover;
  @media screen and (min-width: 767px) {
    background: url(/crew/background-crew-tablet.jpg) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1430px) {
    background: url(/crew/background-crew-desktop.jpg) no-repeat;
    background-size: cover;
    justify-content: space-between;
  } 
`

const DesktopSpreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1430px) {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const BorderBox = styled.div`
  border-bottom: 1px solid #383b4b;
  @media screen and (min-width: 767px) {
    order: 3;
    border: 0;
  }
  @media screen and (min-width: 1430px) {
    width: 40%;
    height: 80%;
  }
`

const VerticalTabsOrderContainer = styled.div`
  @media screen and (min-width: 767px) {
    order: 2;
    border: 0;
  }
`

const ContentContainer = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1430px) {
    flex-shrink: 0;
    padding-left: 165px;
  }
`

const CrewTemplate = ({crew, tabItems}) => {
  return (
    <PageContainer>
      <Header />
      {crew ? 
        <>
          <HeaderNavText number={"02"} text={"MEET YOUR CREW"} />
          <DesktopSpreadContainer>
            <BorderBox>
              <ImageCrew images={crew.images} name={crew.name} imageInfo={ImageInfo.crew} />
            </BorderBox>
            <ContentContainer>
              <VerticalTabsOrderContainer>
                <VerticalTabsCircle tabItems={tabItems}/>
              </VerticalTabsOrderContainer>
              <ContextType3 contextHeader={crew.role} name={crew.name} context={crew.bio}/>
            </ContentContainer>
          </DesktopSpreadContainer>
        </>
      :
        null
      }
    </PageContainer>
  )
}

export default CrewTemplate;